import 'normalize.css';
import '../styles/style.scss';

import { css } from '@emotion/css';
import React from 'react';

function DefaultLayout({children}){
    return(
        <div>
            {children}
        </div>
    );
}

export default DefaultLayout;