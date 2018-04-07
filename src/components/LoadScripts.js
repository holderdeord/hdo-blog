import React from 'react';
import filter from 'lodash/filter';
import { withPrefix } from 'gatsby-link'

const availableScripts = {
    'd3': {
        src: "https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.13/d3.js"
    },
    'c3': {
        src: 'https:/files.holderdeord.no/code/c3js/c3-0.4.10-rc5/c3.min.js'
    },
    'cal-heatmap': {
        src: "https://cdn.jsdelivr.net/cal-heatmap/3.3.10/cal-heatmap.min.js",
    },
    'twitter-wjs': {
        src: "https://platform.twitter.com/widgets.js",
        async: true,
    },
    'jquery': {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
    },
    'hdo-widgets': {
        src: "https://www.holderdeord.no/widgets"
    },
    'timelinejs': {
        src: "https://cdn.knightlab.com/libs/timeline/latest/js/storyjs-embed.js"
    },
    'turnjs': {
        src: withPrefix('/js/lib/turn.min.js')
    },
    'highcharts': [{
        src: "https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.7/highcharts.js"
    },
    {
        src: withPrefix('/js/lib/highcharts-defaults.js')
    }]
};

export default class LoadScripts extends React.Component {
    constructor(props) {
        super(props);
        this.scriptsWrapper = null;

        this.setScriptsWrappertRef = element => {
            this.scriptsWrapper = element;
        };
    }
    addToDom(scriptOptions) {
        const script = document.createElement("script");
        script.src = scriptOptions.src;
        if (scriptOptions.async) {
            script.async = true;
        } else {
            script.defer = 'defer';
        }
        this.scriptsWrapper.appendChild(script);
    }
    componentDidMount() {
        const scripts = this.getScripts(this.props.scripts, this.props.slug);
        Object.entries(scripts).map(([name, scriptOptions]) => {
            if (Array.isArray(scriptOptions)) {
                scriptOptions.map((so) => {
                    this.addToDom(so);
                })
            } else {
                this.addToDom(scriptOptions);
            }
        });

    }
    getScripts(scripts, slug) {
        if(!scripts) {
            return [];
        }
        const urls = filter(availableScripts, (script, key) => {
            return scripts.includes(key);
        });

        if (scripts.includes('__title__')) {
            urls.push({ src: withPrefix(`/js/posts/${slug}.js`)})
        }

        return urls;
    }

    render() {
        return (
            <div className="per-post-scripts" ref={this.setScriptsWrappertRef} />
        );
    }
}
