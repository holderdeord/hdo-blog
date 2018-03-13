import React from 'react'

export default class Byline extends React.Component {
    render() {
        const {date, dateFormatted, authors} = this.props;
        const numAuthors = authors.length;
        // TODO: author emails
        return (<div className="post-byline">
            <time dateTime={date}>{dateFormatted}</time>
            &nbsp;av&nbsp;
            {authors && authors.map((author, i) => {
                const last = i === numAuthors - 1;
                const nextlast = i === numAuthors - 2;

                if (numAuthors === 1 || nextlast) {
                    return (<span key={i}>{author} </span>);
                }

                if (!last) {
                    return (<span key={i}>{author}, </span>);
                }

                return (<span key={i}>og {author}</span>);
            })
            }
        </div>)
    }
}
