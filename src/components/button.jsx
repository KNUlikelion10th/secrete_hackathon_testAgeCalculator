import React from 'react';
import { css } from '@emotion/react';

const Button = ({text, fontsize, paddingsize, margin, onClick }) => {
    return(
    <button 
        onClick={onClick}
    css = { css`
        font-family: big;
        border: none;
        color: #907D5A;
        padding: ${paddingsize};
        background-color: #FFF8B9;
        text-align: center;
        text-decoration: none;
        font-size: ${fontsize};
        border-radius: 14px;
        box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.1);
        margin-left : ${margin};
    `}>
        {text}
    </button>
    );
}

export default Button;