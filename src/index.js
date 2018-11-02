// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";


// user files
import App from './components/App';
import reducers from './reducers' // automatically imports the index.js file
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
