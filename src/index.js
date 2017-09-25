import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// For Redux integration
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
const userList = document.getElementById('user-list');

ReactDOM.render(
 <Provider store={store}>       
    <App />
 </Provider>, userList
  );



