import React from "react";
import { css } from "@emotion/react";
import BrownText from "./browText";


export default function AgeIndicator({age}) {
    return(
        <div
            css={css`
                display: flex;
                justify-content: center;

                height: 26px;
                width: 137px;
                background: #FFF8B9;
                border-radius: 20px;
            `}
        >
            <div
                css={css`
                    position:relative;
                    top: -15px;                    

                    font-family: big;
                    font-size : 30px;
                    color : #907D5A;
                    white-space: pre-line;
                    text-align : center;   
                `}
            >
                {age}대
            </div>
        </div>
    );
}