import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

/** https://reacttraining.com/react-router/web/guides/philosophy */

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
