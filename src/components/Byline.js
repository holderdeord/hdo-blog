import React from 'react';
import PropTypes from 'prop-types';

export default class Byline extends React.Component {
  getSeparator(i) {
    const last = i === this.numAuthors - 1;
    const nextLast = i === this.numAuthors - 2;

    if (nextLast) {
      return ' og ';
    }

    if (last || this.numAuthors === 1) {
      return '';
    }

    return ', ';
  }

  render() {
    const { date, dateFormatted, authors } = this.props;
    this.numAuthors = authors.length;
    return (
      <div className="post-byline">
        <time dateTime={date}>{dateFormatted}</time>
        &nbsp;av&nbsp;
        {authors
          && authors.map((author, i) => {
            if (author.email) {
              return (
                <span key={author.name}>
                  <a href={`mailto:${author.email}`}>{author.name}</a>
                  {this.getSeparator(i)}
                </span>
              );
            }
            return (
              <span key={author.name}>
                {author.name}
                {this.getSeparator(i)}
              </span>
            );
          })}
      </div>
    );
  }
}
Byline.propTypes = {
  date: PropTypes.string.isRequired,
  dateFormatted: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
