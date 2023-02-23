import React, { useEffect } from "react";
import { css, useTheme } from "@emotion/react";
import DefaultLayout from "../layouts/default";

import Number from '../components/number';
import BrownText from "../components/browText";
import Title from '../components/Title';
import Button from "../components/button";
import Yellow from './../components/Ywllow';
import App from './../app';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const theme = useTheme();        
    const navigate = useNavigate();

    return(
        <DefaultLayout>
            <div
                css={css`
                height: 100vh;
                display: flex;
                flex-direction: column;

                justify-content: center;
                align-items: center;
                `}
            >
            
                <Yellow></Yellow>
                <div className="height" css = {
                    css`
                    height: 100vh;
                    min-height: 100;
                    padding-top: 90px;
                    `
                }>
                <BrownText size = "2rem" text = {["당신의", <br/>, "입맛의 나이는?"]}></BrownText>
                <Title size={"3.75rem"} border = {"5px"} breack={"\n"}></Title>
                <div css = {css `
                    font-family : big;
                    color : #4E4D4D;
                    font-size : 1.375rem;
                    margin-left : 40px;
                    margin-bottom : 60px;
                `}>
                    초딩입맛부터- <br></br>어른입맛까지-
                </div>
                <Button fontsize ="1.250rem" paddingsize = "18px 40px" text={"테스트 시작하기"} margin = {"0px"} onClick={() => {
                    navigate("/select1");
                }}></Button>
                </div>
                <Yellow css = {css`
                    height: 40px;
                    position : relative;
                    transform : translateY(-100%);
                `}></Yellow>
            </div>                    
        </DefaultLayout>
    );
}