
import React, { createContext, useCallback, useState } from 'react';
import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/home';
import TestPage1 from './pages/test1';
import TestPage2 from './pages/test2';
import SelectPage1 from './pages/select1';
import ResultPage from './pages/result';
import SelectPage2 from './pages/select2';
import SelectPage3 from './pages/select3';
import SelectPage4 from './pages/select4';
import SelectPage5 from './pages/select5';
import SelectPage6 from './pages/select6';
import SelectPage7 from './pages/select7';
import SelectPage8 from './pages/select8';
import SelectPage9 from './pages/select9';
import SelectPage10 from './pages/select10';

export const AppContext = createContext();

function App() {

    
    const [point, setPoint] = useState(0);

    const managePoint = useCallback((value) => {
        console.log('Clicked!');
        console.log('Before Point => ' + point);
        setPoint(point + value);
        console.log('After Point => ' + point);
    }, [point, setPoint]);
    

    

    return(
        <AppContext.Provider value={{point, managePoint}}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test1" element={<TestPage1 />} />
                <Route path="/test2" element={<TestPage2 />} />
                <Route path="/select1" element={<SelectPage1 />} />
                <Route path="/select2" element={<SelectPage2 />} />
                <Route path="/select3" element={<SelectPage3 />} />
                <Route path="/select4" element={<SelectPage4 />} />
                <Route path="/select5" element={<SelectPage5 />} />
                <Route path="/select6" element={<SelectPage6 />} />
                <Route path="/select7" element={<SelectPage7 />} />
                <Route path="/select8" element={<SelectPage8 />} />
                <Route path="/select9" element={<SelectPage9 />} />
                <Route path="/select10" element={<SelectPage10 />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </AppContext.Provider>
    );
}

export default App;