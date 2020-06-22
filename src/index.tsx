import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Format2Json2View from './Format2Json2View';
import * as serviceWorker from './serviceWorker';
import { testJson } from './Format2Json2View/mock';

ReactDOM.render(
  <React.StrictMode>
    <Format2Json2View data={testJson}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
