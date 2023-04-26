import React from 'react';

export default function Links({ setSubReddit }) {

    return (
        <div className="btn-cont">
            <p id="links" onClick={() => setSubReddit('balisong')}>Balisong</p>
            <p id="links" onClick={() => setSubReddit('balisongsale')}>Balisong Sales</p>
            <p id="links" onClick={() => setSubReddit('balisongclones')}>Balisong Clones</p>
            <p id="links" onClick={() => setSubReddit('aarons3rdapi')}>Clear Images [X]</p>
        </div>
    )
}