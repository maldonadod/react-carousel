import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function itemsSource() {
    return [
        { title: "DAVID BOWIE" },
        { title: "CHARLY GARCIA" },
        { title: "MILES DAVIS" },
        { title: "BABASONICOS" },
        { title: "DAVID BOWIE" },
        { title: "CHARLY GARCIA" },
        { title: "MILES DAVIS" },
        { title: "BABASONICOS" },
        { title: "DAVID BOWIE" },
        { title: "CHARLY GARCIA" },
        { title: "MILES DAVIS" },
        { title: "BABASONICOS" },
        { title: "DAVID BOWIE" },
        { title: "CHARLY GARCIA" },
        { title: "MILES DAVIS" },
        { title: "BABASONICOS" },
        { title: "DAVID BOWIE" },
        { title: "CHARLY GARCIA" },
        { title: "MILES DAVIS" },
        { title: "BABASONICOS" }
    ].map((item, index) => ({...item, key: index}));
}

ReactDOM.render(<App itemsSource={itemsSource} />, document.getElementById('root'));
