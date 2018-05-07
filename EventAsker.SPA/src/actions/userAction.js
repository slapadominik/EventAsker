import axios from 'axios';
import setAuthorizationToken from '../helpers/authorizationToken';
import {BASE_URL} from '../constants';
import { SET_CURRENT_USER} from './actionTypes';
import jwt from 'jsonwebtoken';

//Action creator - function which creates object 
export const setCurrentUser = (user) => {
    //Action object - contains payload of information that send data from application to the Store
    return {
        type: SET_CURRENT_USER,
        user
    };
}



export const login = (data) => {
    return (dispatch) => {
        return axios.post(BASE_URL+ '/auth/login', data).then(response => {
            const token = response.data;
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