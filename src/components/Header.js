import React from 'react';

export default function Header({ setSubReddit }) {

    return (
        <>
            <h1 onClick={() => setSubReddit('aaronssecondapi')}>LURKER</h1>
            <h6>Filters out all images and titles from reddit</h6>
        </>
    )
}