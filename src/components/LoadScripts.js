import React from 'react';
import filter from 'lodash/filter';
import { withPrefix } from 'gatsby-link';
import PropTypes from 'prop-types';

const availableScripts = {
  d3: {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.13/d3.js',
  },
  c3: {
    src: 'https:/files.holderdeord.no/code/c3js/c3-0.4.10-rc5/c3.min.js',
  },
  'cal-heatmap': {
    src: 'https://cdn.jsdelivr.net/cal-heatmap/3.3.10/cal-heatmap.min.js',
  },
  'twitter-wjs': {
    src: 'https://platform.twitter.com/widgets.js',
    async: true,
  },
  jquery: {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
  },
  'hdo-widgets': {
    src: 'https://www.holderdeord.no/widgets',
  },
  timelinejs: {
    src: 'https://cdn.knightlab.com/libs/timeline/latest/js/storyjs-embed.js',
  },
  turnjs: {
    src: withPrefix('/js/lib/turn.min.js'),
  },
  highcharts: [
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.7/highcharts.js',
    },
    {
      src: withPrefix('/js/lib/highcharts-defaults.js'),
    },
  ],
};

export default class LoadScripts extends React.Component {
  /** Load scripts from prop `scripts` in order by key.
   * Legacy scripts can be loaded with this per blog article */
  constructor(props) {
    super(props);
    this.scriptsWrapper = null;

    this.setScriptsWrappertRef = element => {
      this.scriptsWrapper = element;
    };
  }
  componentDidMount() {
    const scripts = this.getScripts(this.props.scripts, this.props.slug);
    Object.values(scripts).forEach(scriptOptions => {
      if (Array.isArray(scriptOptions)) {
        scriptOptions.forEach(so => {
          this.createScriptElement(so);
        });
      } else {
        this.createScriptElement(scriptOptions);
      }
    });
  }
  getScripts(scripts, slug) {
    if (!scripts) {
      return [];
    }
    const urls = filter(availableScripts, (script, key) =>
      scripts.includes(key)
    );

    if (scripts.includes('__title__')) {
      urls.push({ src: withPrefix(`/js/posts/${slug}.js`) });
    }

    return urls;
  }
  createScriptElement(scriptOptions) {
    /* Ref: https://stackoverflow.com/a/38840724/543864 */
    const script = document.createElement('script');
    script.src = scriptOptions.src;
    script.async = !!scriptOptions.async; // preserve run order
    this.scriptsWrapper.appendChild(script);
  }
  render() {
    return (
      <div className="per-post-scripts" ref={this.setScriptsWrappertRef} />
    );
  }
}
LoadScripts.propTypes = {
  scripts: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string.isRequired,
};
LoadScripts.defaultProps = {
  scripts: null,
};
