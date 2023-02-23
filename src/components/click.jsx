import React from 'react';
import { css } from '@emotion/react';

const Click = ({text, color, onClick}) => {
    return(
        <div css = {css `
        display: flex;
        flex-direction: column;
        justify-content: center;
        `} >
        <div css = { css` display: flex;
                flex-direction: vertex;
                align-items: center;
               `}
                ><p css = {css
                    `font-family : big;
                    font-size : 1.125rem;
                    color : ${color} `
                }>{text}</p>
            
        </div>
        <button 
        onClick={onClick}
        css ={
            css`
            border-radius: 100%;
            border : 3px solid #907D5A;
            width : 10vmin;
            height : 10vmin;
            background-color : white;
            margin-top : -12px

            `
        }>
        </button>
        </div>
    );
}

export default Click;