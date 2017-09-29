import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// redux set up
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers'

const store = createStore(reducers);



const idRoot= document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, idRoot
    );
