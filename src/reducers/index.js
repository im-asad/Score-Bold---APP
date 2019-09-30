import {combineReducers} from 'redux';
import auth from "./auth.reducer";
import product from "./product.reducer";
import course from "./course.reducer";

const reducer = combineReducers({
    auth,
    product,
    course
});

export default reducer;