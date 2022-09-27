import React from 'react';


export default function ImageCards({ data }) {

    return (
        <>
            {
                data.length > 1 ? data.map((item, index) => {
                    let img = item.data.url_overridden_by_dest;
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
                                </div>
                            )
                        );
                    }
                }) : ''
            }
        </>
    )
}