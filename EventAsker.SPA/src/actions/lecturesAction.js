import { SET_LECTURES } from './actionTypes';

//Action creator - function which creates object 
export const setLectures = (lectures) => {
    //Action object - contains payload of information that send data from application to the Store
    return {
        type: SET_LECTURES,
        lectures
    }  
}

//dispatch action
export const lecture = (lectures) => {
    return dispatch => {
        console.log(lectures);
        dispatch(setLectures(lectures));
    }
}

export const lectureAction = lectures => dispatch => {
    return dispatch => {
     dispatch(setLectures(lectures));
   }
 }

 