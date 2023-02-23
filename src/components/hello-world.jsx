import React from 'react';
import { css } from '@emotion/react';

import TacoImage from '../images/taco.png';

export default function HelloWorld(){
    return (
        <div
            css={css`
                width: 100px;
                height: 100px;

                background-color: tomato;
                color: white;

                font-size: 1.5rem;
                padding: 20px;
            `}
        >
            <div css={css`                
                object-fit: cover;
                overflow: hidden;
            `}>
                <img css={css`
                    width: 100%;
                    height: 100%;
                `} src={TacoImage} />
            </div>
            
        </div>
    );
}