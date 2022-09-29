import React from 'react';
import { FliesText } from 'react-text-fun';


export default function Header({ setSubReddit }) {

    return (
        <>
            <h1 onClick={() => setSubReddit('aaronssecondapi')}>LURKER</h1>
            <h6>Filters out all images and titles from reddit</h6>
            {/* <FliesText
                cellRadius={.7}
                text="LURKER"
                fontSize={90}
                cellWidth={0.02}
                speed={4}
                dodge={true}
                dodgeY={0.5}
                dodgeSpread={0.08}
                fill="dodgerblue"
                fontFamily="sans-serif"
                fontWeight="900"
            /> */}
        </>
    )
}