// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose  } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//Reducer
import reducer from './reducers'

// CSS
import './index.css'

//App
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)


ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'))
registerServiceWorker()
