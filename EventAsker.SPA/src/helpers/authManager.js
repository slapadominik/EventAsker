import axios from 'axios';
import setAuthorizationToken from './authorizationToken';
import {BASE_URL} from '../constants';
import { SET_CURRENT_USER } from '../reducers/types';
import jwt from 'jsonwebtoken';

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export const login = (data) => {
    return dispatch => {
        return axios.post(BASE_URL+ '/auth/login', data).then(response => {
            const token = response.data.tokenString;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
        });
    }
    
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}