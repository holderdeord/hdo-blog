import React from 'react'

export default class Byline extends React.Component {
    getSeparator(i) {
        const last = i === this.numAuthors - 1;
        const nextLast = i === this.numAuthors - 2;

        if (nextLast) {
            return ' og '
        }

        if (last || this.numAuthors === 1) {
            return '';
        }

        return ', ';
    }

    render() {
        const {date, dateFormatted, authors} = this.props;
        this.numAuthors = authors.length;
        return (
            <div className="post-byline">
                <time dateTime={date}>{dateFormatted}</time>
                &nbsp;av&nbsp;
                {authors && authors.map((author, i) => {
                    if (author.email) {
                        return (
                            <span key={i}>
                                <a href={`mailto:${author.email}`}>{author.name}</a>
                                {this.getSeparator(i)}
                            </span>
                        );
                    }
                    return (<span key={i}>{author.name}{this.getSeparator(i)}</span>);
                    })
                }
            </div>
        );
    }
}
