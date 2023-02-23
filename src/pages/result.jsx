import React, { useContext } from "react";
import { css } from "@emotion/react";

import DefaultLayout from "../layouts/default";
import Title from "../components/Title";
import AgeIndicator from "../components/age-indicator";
import { useNavigate } from "react-router-dom";

import Baby from "../images/baby.png";
import Couple from "../images/couple.png";
import Emplo from "../images/qqq.png";
import Family from "../images/family.png";
import Grand from "../images/grandparents.png";
import { AppContext } from "../app";

export default function ResultPage(){

    const {point, managePoint} = useContext(AppContext);
    const cur_age = point;

    const navigate = useNavigate();

    return(
        <DefaultLayout>
            <div
            // 전체 컨테이너
                css={css`
                    display: flex;
                    flex-direction: column;

                    justify-content:center;
                    align-items:center;
                `}
            >
                <div
                    css={css`
                        margin-top: 28px;
                    `}
                />                
                <Title size = "1.125em" border={"2px"}></Title>
                <div
                    css={css`
                        margin-top: 40px;
                    `}
                />
                
                {cur_age >= 50 && <AgeIndicator age={50}/>}           
                {cur_age >= 50 && 
                <div
                    css={css`
                        width: 170px;
                        height: 170px;

                        margin-top: 20px;

                        overflow: hidden;
                        object-fit: cover;
                    `}
                    
                >
                    <img 
                        css={css`
                            width: 100%;
                            height: 100%;
                        `}
                    src={Grand}/>
                    </div>}
                {cur_age >= 50 && <div css={css`
                    width: 220px;
                    height: 22px;
                    
                    margin-top: 11px;

                    font-family: "big";                    
                    font-size: 18px;
                    line-height: 22px;
                    /* identical to box height */

                    text-align: center;

                    color: #000000;
                `}>
                        최고령의 할머니/할아버지 입맛
                    </div>}
                {cur_age >= 50 && <div
                    css={css`
                        width: 240px;
                        height: 0px;
                        
                        margin-top : 22px;
                        margin-bottom : 22px;
                        

                        border: 1px dashed #C5C5C5;
                    `}
                ></div>}                
                {cur_age >= 50 && <div
                    css={css`
                        width: 203px;
                        height: auto;
                        

                        font-family: "small";
                        font-size: 14px;
                        line-height: 18px;

                        color: #000000;
                    `}
                >
                    나이대가 너무 너무 높은 당신은
진정으로 건강한 입맛임이 자명합니다.<br></br><br></br>

가장 좋아하는 음식들은 건강하거나
딤백할 것이며 초딩입맛과는 상극입니다.<br></br><br></br>

음식 섭취를 통해 건강도 챙길 수 있으니
앞으로도 많은 음식들을 섭취하시길 바랍니다.<br></br><br></br>
                    </div>}  

                {(cur_age >= 40 && cur_age < 50) && <AgeIndicator age={40}/>}
                {(cur_age >= 40 && cur_age < 50) && 
                <div
                    css={css`
                        width: 170px;
                        height: 170px;

                        margin-top: 20px;

                        overflow: hidden;
                        object-fit: cover;
                    `}
                    
                >
                    <img 
                        css={css`
                            width: 100%;
                            height: 100%;
                        `}
                    src={Family}/>
                    </div>}
                {(cur_age >= 40 && cur_age < 50) && <div css={css`
                    width: 220px;
                    height: 22px;
                    
                    margin-top: 11px;

                    font-family: "big";                    
                    font-size: 18px;
                    line-height: 22px;
                    /* identical to box height */

                    text-align: center;

                    color: #000000;
                `}>
                        건강한 아저씨/아줌마 입맛
                    </div>}
                {(cur_age >= 40 && cur_age < 50) && <div
                    css={css`
                        width: 240px;
                        height: 0px;
                        
                        margin-top : 22px;
                        margin-bottom : 22px;
                        

                        border: 1px dashed #C5C5C5;
                    `}
                ></div>}                
                {(cur_age >= 40 && cur_age < 50) && <div
                    css={css`
                        width: 203px;
                        height: auto;
                        

                        font-family: "small";
                        font-size: 14px;
                        line-height: 18px;

                        color: #000000;
                    `}
                >
                    다양하게 먹되 좀 더 건간한 입맛인 당신은
나이대가 있는 입맛임이 자명합니다.<br></br><br></br>

다양한 음식을 잘 먹으면서도 건강한 혀는
앞으로도 다양하고 많은 음식들을 먹을 수 있도록
도와줄 것 입니다.<br></br><br></br>

앞으로도 많은 음식들을 통해
다양한 행복을 맛보시길 바랍니다.

                    </div>} 


                {(cur_age >= 30 && cur_age < 40) && <AgeIndicator age={30}/>}
                {(cur_age >= 30 && cur_age < 40) && 
                <div
                    css={css`
                        width: 170px;
                        height: 170px;

                        margin-top: 20px;

                        overflow: hidden;
                        object-fit: cover;
                    `}
                    
                >
                    <img 
                        css={css`
                            width: 100%;
                            height: 100%;
                        `}
                    src={Emplo}/>
                    </div>}
                {(cur_age >= 30 && cur_age < 40) && <div css={css`
                    width: 220px;
                    height: 22px;
                    
                    margin-top: 11px;

                    font-family: "big";                    
                    font-size: 18px;
                    line-height: 22px;
                    /* identical to box height */

                    text-align: center;

                    color: #000000;
                `}>
                        대중적인 어른 입맛
                    </div>}
                {(cur_age >= 30 && cur_age < 40) && <div
                    css={css`
                        width: 240px;
                        height: 0px;
                        
                        margin-top : 22px;
                        margin-bottom : 22px;
                        

                        border: 1px dashed #C5C5C5;
                    `}
                ></div>}                
                {(cur_age >= 30 && cur_age < 40) && <div
                    css={css`
                        width: 203px;
                        height: auto;
                        

                        font-family: "small";
                        font-size: 14px;
                        line-height: 18px;

                        color: #000000;
                    `}
                >
                    뭐든 잘 먹는 당신은
최고의 혀를 가지고 있음이 자명합니다.<br></br><br></br>

다양한 음식을 잘 먹는 당신의 혀는
어느 상황에서도 당신을 살아 남게 해 줄 것입니다.<br></br><br></br>

앞으로도 많은 음식들을 통해
다양한 행복을 맛보시길 바랍니다.


                    </div>} 
                
                
                
                {(cur_age >= 20 && cur_age < 30) && <AgeIndicator age={20}/>}
                {(cur_age >= 20 && cur_age < 30) && 
                <div
                    css={css`
                        width: 170px;
                        height: 170px;

                        margin-top: 20px;

                        overflow: hidden;
                        object-fit: cover;
                    `}
                    
                >
                    <img 
                        css={css`
                            width: 100%;
                            height: 100%;
                        `}
                    src={Couple}/>
                    </div>}
                
                {(cur_age >= 20 && cur_age < 30) && <div css={css`
                    width: 220px;
                    height: 22px;
                    
                    margin-top: 11px;

                    font-family: "big";                    
                    font-size: 18px;
                    line-height: 22px;
                    /* identical to box height */

                    text-align: center;

                    color: #000000;
                `}>
                        신선한 젊은입맛
                    </div>}
                {(cur_age >= 20 && cur_age < 30) && <div
                    css={css`
                        width: 240px;
                        height: 0px;
                        
                        margin-top : 22px;
                        margin-bottom : 22px;
                        

                        border: 1px dashed #C5C5C5;
                    `}
                ></div>}                
                {(cur_age >= 20 && cur_age < 30) && <div
                    css={css`
                        width: 203px;
                        height: auto;
                        

                        font-family: "small";
                        font-size: 14px;
                        line-height: 18px;

                        color: #000000;
                    `}
                >
                    어느정도 가리는 음식이 있는 당신은
젊은 혀를 가지고 있음이 자명합니다.<br></br><br></br>

가장 좋아하는 음식들은 다양하되
호불호가 확실한 음식들이 확실할것입니다.<br></br><br></br>

가끔은 불호하는 음식들도 먹어보면 어떨까요?
새로운 맛이 색다른 경험을 줄 수도 있습니다.



                    </div>}
                
                
                
                {(cur_age >= 10 && cur_age < 20) && <AgeIndicator age={10}/>}
                {(cur_age >= 10 && cur_age < 20) && 
                <div
                    css={css`
                        width: 170px;
                        height: 170px;

                        margin-top: 20px;

                        overflow: hidden;
                        object-fit: cover;
                    `}
                    
                >
                    <img 
                        css={css`
                            width: 100%;
                            height: 100%;
                        `}
                    src={Baby}/>
                    </div>}

                {(cur_age >= 10 && cur_age < 20) && <div css={css`
                    width: 220px;
                    height: 22px;
                    
                    margin-top: 11px;

                    font-family: "big";                    
                    font-size: 18px;
                    line-height: 22px;
                    /* identical to box height */

                    text-align: center;

                    color: #000000;
                `}>
                        진정한 초딩입맛
                    </div>}
                {(cur_age >= 10 && cur_age < 20) && <div
                    css={css`
                        width: 240px;
                        height: 0px;
                        
                        margin-top : 22px;
                        margin-bottom : 22px;
                        

                        border: 1px dashed #C5C5C5;
                    `}
                ></div>}                
                {(cur_age >= 10 && cur_age < 20) && <div
                    css={css`
                        width: 203px;
                        height: auto;
                        

                        font-family: "small";
                        font-size: 14px;
                        line-height: 18px;

                        color: #000000;
                    `}
                >
                    편식을 아주 많이 하는 당신은
아주 어린 혀를 가지고 있음이 자명합니다.<br></br><br></br>

가장 좋아하는 음식들은 자극적거나
달달하니 정말 강렬하니 
할머니/할아버지 입맛과 상극일 것입니다.<br></br><br></br>

하지만 이에 따라 섭취하는 음식 종류의
한계가 분명하며 건강에 악 신호가 올 수도 있습니다.<br></br><br></br>

가끔은 맛이 없더라도 
나를 위해 한계를 뛰어 넘어 보면 어떨까요?




                    </div>}


                <button
                    onClick={() => {
                        navigate("/");
                    }}
                    css={css`
                        font-family: "big";
                        border: 0;
                        font-size: 1.125rem;
                        margin-top: 50px;

                        width: 156px;
                        height: 45px;
                        left: 57px;
                        top: 548px;
                        
                        color:  #907D5A;
                        background: #FFF8B9;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 20px;
                    `}
                >
                    다시하기
                </button>
            </div>
        </DefaultLayout>
    );

}