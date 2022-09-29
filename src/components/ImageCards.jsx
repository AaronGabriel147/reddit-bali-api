import React from 'react';


// res.data.data.children[0].data.permalink

export default function ImageCards({ data }) {

    return (
        <>
            {
                data.length > 1 ? data.map((item, index) => {
                    let img = item.data.url_overridden_by_dest;
                    let redditCommentSection = `https://old.reddit.com${item.data.permalink}`
                    if (img !== undefined) {
                        const lastThree = img.slice(-3);
                        let imgType =
                            lastThree === 'jpg' || lastThree === 'png' || lastThree === 'gif';
                        return (
                            imgType && (
                                <div className="card" key={index}>
                                    <a href={img} target="_blank" rel="noreferrer">
                                        <img src={img} alt="from reddit" />
                                    </a>
                                    <p id="title">{item.data.title}</p>
                                    <a href={redditCommentSection} target="_blank" rel="noreferrer">
                                        <p id="view-on-reddit">View on reddit</p>
                                    </a>

                                </div>
                            )
                        );
                    }
                }) : ''
            }
        </>
    )
}