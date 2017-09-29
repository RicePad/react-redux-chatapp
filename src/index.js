import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// redux set up
import { Provider } from 'react-redux'
import {compose, applyMiddleware, createStore } from 'redux';
import reducers from './reducers'

//
import {persistStore, autoRehydrate} from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


const middleware = [ thunk ];



// middleware.push(createLogger());

const store = createStore(reducers,compose(applyMiddleware(...middleware),autoRehydrate()));

// begin periodically persisting the store
// persistStore(store)


const idRoot= document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, idRoot
    );
