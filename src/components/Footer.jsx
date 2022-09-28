import React from 'react'

export default function Footer({ setSubReddit }) {
    return (
        <>
            <div class="footer">
                {/* <h9 id="footer-txt">© 2022 Aaron Gabriel</h9> */}
                <h2 id="footer-txt" onClick={() => setSubReddit('aaronssecondapi')}>© 2022 Aaron Gabriel</h2>
            </div>
        </>
    )
}
