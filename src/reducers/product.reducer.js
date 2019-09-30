import {GETTING_PRODUCTS, SET_PRODUCTS} from "../actions/products.actions";

const initialState = {
    products: [],
    productOfTheDay: null,
    loading: false
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case GETTING_PRODUCTS:
        {
            return {...state, loading: true}
        }
        case SET_PRODUCTS:
        {
            return {...state, ...action.payload, loading: false}
        }
    }
    return state;
}

export default productReducer;