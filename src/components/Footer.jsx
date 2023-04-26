import React from 'react'
import little from '../little.png'


export default function Footer({ setSubReddit }) {

    return (
        <>
            <div className="footer">
                <h2 id="footer-txt" onClick={() => setSubReddit('aarons3rdapi')}>
                    Always Lurking
                </h2>
                <img id="little" src={little} alt="lurking man in the dark" />
            </div>
        </>
    )
}
