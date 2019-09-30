import axios from "axios";
import {history} from "../App";

const API_URL = (process && process.env && process.env.NODE_ENV === "production") ? '' : ``;

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const USER_UPDATE = 'USER UPDATE';
export const LOADING = 'LOADING';

export function submitLogin({email, password})
{
    return (dispatch) => {
        dispatch({
            type: LOADING,
        });
        const request = axios.post(`${API_URL}/api/login`, {email, password});
        request.then((response) => {
            const {data} = response;
            const { status, user, isAuthenticated, message } = data;
            if (status === 200) {
                history.push("/");
                return dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user, isAuthenticated}
                });
            } else {
                return dispatch({
                    type: LOGIN_ERROR,
                    payload: {message}
                });
            }

        })
            .catch(error => {
                return dispatch({
                    type: LOGIN_ERROR,
                    payload: error
                });
            });
    }
}

export function authenticate(pathname=null)
{
    return (dispatch) => {
        const request = axios.post(`${API_URL}/api/authenticate`);
        request.then((response) => {
            const {data} = response;
            const { status, user, isAuthenticated, message } = data;
            if (status === 200) {
                history.push(pathname ? pathname : "/");
                return dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user, isAuthenticated}
                });
            } else {
                return dispatch({
                    type: LOGIN_ERROR,
                    payload: {message}
                });
            }

        })
            .catch(error => {
                return dispatch({
                    type: LOGIN_ERROR,
                    payload: error
                });
            });
    }
}