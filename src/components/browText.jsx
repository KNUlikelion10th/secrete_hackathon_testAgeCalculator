import React from 'react';
import { css } from '@emotion/react';

const BrownText = ({size, text}) => {
    return(
    <div css = { css`
        font-family: big;
        font-size : ${size};
        color : #907D5A;
        white-space: pre-line;
        text-align : center;
    `}>
        {text[0]}
        {text[1]}
        {text[2]}
    </div>
    );
}

export default BrownText;