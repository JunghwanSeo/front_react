import React from 'react';
import ReactDOM from 'react-dom';
import '../css/DiaryApp.css';
import App from "../counter/App";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('diaryRoot')
);

