import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './components/Planes';

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
