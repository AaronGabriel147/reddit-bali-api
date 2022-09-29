import React from 'react'
import little from '../little.png'


export default function Footer({ setSubReddit }) {

    return (
        <>
            <div className="footer">
                <h2 id="footer-txt" onClick={() => setSubReddit('aaronssecondapi')}>
                    Always watching, never posting.
                </h2>

                {/* <h2 id="footer-txt" onClick={() => setSubReddit('aaronssecondapi')}>© 2022 Aaron Gabriel</h2> */}
                <img id="little" src={little} alt="lurking man in the dark" />
            </div>
        </>
    )
}
