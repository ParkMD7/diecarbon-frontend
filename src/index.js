// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from "redux-promise";
import thunk from 'redux-thunk';


// user files
import App from './components/App';
import reducers from './reducers'; // automatically imports the index.js file
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

// const createStoreWithMiddleWare = applyMiddleware(promise, thunk)(createStore);
// const createStoreWithMiddleWare = composeWithDevTools(applyMiddleware(promise, thunk)(createStore));
const createStoreWithMiddleWare = createStore(reducers, composeWithDevTools(applyMiddleware(promise, thunk)))

ReactDOM.render(
  // <Provider store={createStoreWithMiddleWare(reducers)}>
  <Provider store={createStoreWithMiddleWare}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


serviceWorker.unregister();
