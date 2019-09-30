import {LOGIN_ERROR, LOGIN_SUCCESS, USER_UPDATE, LOADING} from "../actions/login.actions";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case USER_UPDATE: {
            return {...state, user: action.payload.user}
        }
        case LOADING: {
            return {...state, loading: true}
        }
        case LOGIN_SUCCESS:
        {
            return {...state, ...action.payload, loading: false}
        }
        case LOGIN_ERROR:
        {
            return {...state, ...action.payload, isAuthenticated: false, user: null, loading: false}
        }
    }
    return state;
}

export default authReducer;