import React from 'react';
import ReactDOM from 'react-dom';

// Redux Connection
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);

ReactDOM.render(
 <div></div>, document.getElementById('root')
 );