import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// context api imports 
import MyProvider from './Special_components/StateProvider';
import reducer, { initialState } from './Special_components/reducer';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MyProvider initialState={initialState} reducer={reducer}>
            <App />
        </MyProvider>
        
        
    </React.StrictMode>

)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
