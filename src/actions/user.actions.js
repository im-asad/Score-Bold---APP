import axios from "axios";
import {USER_UPDATE} from "./login.actions";
import {history} from "../App";

const API_URL = (process && process.env && process.env.NODE_ENV === "production") ? '' : ``;

export const updateEmail = ({newEmail, currentPassword, userId}) =>
{
    return async (dispatch) => {
        const response = await axios.put(`${API_URL}/api/users/${userId}/update-email`, {newEmail, currentPassword});
        const {data} = response;
        const { user, status, message } = data;
        if (status === 200) {
            dispatch({
                type: USER_UPDATE,
                payload: {user}
            });
            return {user, message};
        } else {
            return {status, message};
        }
    };
};

export const updateName = ({fullName, userId}) =>
{
    return async (dispatch) => {
        const response = await axios.put(`${API_URL}/api/users/${userId}`, {fullName});
        const {data} = response;
        const { user, status, message } = data;
        if (status === 200) {
            dispatch({
                type: USER_UPDATE,
                payload: {user}
            });
            return {user, message};
        } else {
            return {status, message};
        }
    }
};

export const updatePassword = ({currentPassword, newPassword, confirmPassword, userId}) =>
{
    return async (dispatch) => {
        const response = await axios.put(`${API_URL}/api/users/${userId}/update-password`, {currentPassword, newPassword, confirmPassword});
        const {data} = response;
        const { user, status, message } = data;
        if (status === 200) {
            dispatch({
                type: USER_UPDATE,
                payload: {user}
            });
            return {user, message};
        } else {
            return {status, message};
        }
    }
};

export const logout = () =>
{
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}/api/logout`);
        const {data} = response;
        const { user, status, message } = data;
        if (status === 200) {
            history.push("/login");
            dispatch({
                type: USER_UPDATE,
                payload: {user, isAuthenticated: false}
            });
            return {user, message};
        } else {
            return {status, message};
        }
    }
};

