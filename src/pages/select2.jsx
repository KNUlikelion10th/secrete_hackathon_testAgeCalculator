import React, { useContext, useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import DefaultLayout from "../layouts/default";
import BrownText from './../components/browText';
import Title from "../components/Title";
import Number from "../components/number";
import Click from "../components/click";
import { AppContext } from "../app";
import { useNavigate } from "react-router-dom";


import Tteok from "../images/gop.jpg";

export default function SelectPage2() {
    const theme = useTheme();        
    const { point, managePoint } = useContext(AppContext);   
    const navigate = useNavigate();

    return(
        <DefaultLayout>  
            <div css = { css`height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;`}>      
                <div>
                <Title size = "1.125em" border={"2px"}></Title>
                <BrownText text ={["Q.해당 음식에 대한 선호도는 ?"]} size = "1.438rem"></BrownText>
                    <h1 css = {
                        css`
                            text-align : center;
                            font-family : big;
                            font-size : 2.6rem;
                            margin-top : 8px;
                        `
                    }>곱창</h1>
                    <div css = {css`
                    background-color :#FFF8B9;
                    width : 65vmin;
                    height : 65vmin;
                    padding: 30px;
                    `}>
                    <div
                        css={css`
                            object-fit: cover;
                            overflow: hidden;
                            border-radius: 10px;
                        `}
                    >
                            <img 
                            css={css`
                                width: 100%;
                                height: 100%;

                            `}
                            src={Tteok} />
                            
                    </div>
                    </div>
                    <div css = {css`
                    display: flex;
                    flex-direction: verticle;
                    justify-content: space-around;
                    `}>
                    <Click text = "짱싫어" color = "#6B7FEA" onClick={() => {managePoint(0); navigate("/select3")}}></Click>
                    <Click text = "싫어" color = "#000000" onClick={() => {managePoint(1); navigate("/select3")}}></Click>
                    <Click text = "좋아" color = "#000000" onClick={() => {managePoint(3); navigate("/select3")}}></Click>
                    <Click text = "짱좋아" color = "#EA6B7C" onClick={() => {managePoint(5); navigate("/select3")}}></Click>
                    </div>
                </div>
                <Number int = "2" size ="1.25rem"></Number>
            </div>     
        </DefaultLayout>
    );
}