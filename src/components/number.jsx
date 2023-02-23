import React from 'react';
import { css } from '@emotion/react';

const Number = ({size,int}) => {
    return(
    <div css = { css`
        font-family: big;
        font-size : ${size};
        color : #907D5A;
        text-align : center;
    `}>
      {int} / 10
    </div>
    );
}

export default Number;