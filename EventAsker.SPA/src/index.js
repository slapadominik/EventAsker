import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import setAuthorizationToken from './helpers/authorizationToken';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { setCurrentUser } from './actions/userAction';
import jwt from 'jsonwebtoken';

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


if (localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root'));

registerServiceWorker();
