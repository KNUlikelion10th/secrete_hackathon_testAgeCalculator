import React, { useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { AppContext } from "../app";
import { useNavigate } from "react-router-dom";


export default function TestPage1() {

    
    
    const { point, managePoint } = useContext(AppContext);   
    const navigate = useNavigate();

    return(
        <div>
            <button
                onClick={() => {
                    managePoint(1);
                    navigate("/test2");
                }}
                css={css`
                    width: 100px;
                    height: 30px;
                    
                    background-color: tomato;
                    color: white;
                `}
            >
                    1을 더한다.
            </button>
            <button
                onClick={() => {
                    managePoint(5);
                    navigate("/test2");
                }}
                css={css`
                    width: 100px;
                    height: 30px;
                    
                    background-color: magenta;
                    color: white;
                `}
            >
                    2를 더한다.
            </button>
        </div>
    );
}