import React from 'react';

export default function Links({ setSubReddit }) {

    return (
        <div className="btn-cont">
            <p id="links" onClick={() => setSubReddit('all')}>ALL</p>
            <p id="links" onClick={() => setSubReddit('spaceporn')}>SPACE</p>
            <p id="links" onClick={() => setSubReddit('historyporn')}>HISTORY</p>
            <p id="links" onClick={() => setSubReddit('interestingasfuck')}>INTERESTING AF</p>
            <p id="links" onClick={() => setSubReddit('mechanicalkeyboards')}>MECHANICAL KEYBOARDS</p>
            <p id="links" onClick={() => setSubReddit('balisong')}>BALISONG</p>
            <p id="links" onClick={() => setSubReddit('dataisbeautiful')}>DATA IS BEAUTIFUL</p>
            <p id="links" onClick={() => setSubReddit('derp')}>DERP</p>
            <p id="links" onClick={() => setSubReddit('deepdream')}>DEEP DREAM</p>
        </div>
    )
}