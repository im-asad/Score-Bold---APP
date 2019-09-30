import {filterTrendingProducts, filterUntappedProducts} from "../operations/filter";

export const GETTING_PRODUCTS = 'GETTING PRODUCTS';
export const SET_PRODUCTS = 'SET PRODUCTS';

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'key7qA4iXgLPfyBwy'}).base('appsVxXY0zmP7hL3f');

export const getProduct = async (productId) =>
{
    // const response = await axios.get(`${API_URL}/api/products/${productId}`);
    // const {data} = response;
    // const { product, status } = data;
    // if (status === 200) {
    //     return product;
    // } else {
    //     alert("ERROR");
    //     return null;
    // }

    try {
        const product = await base('Product').find(productId);
        return product;
    } catch (e) {
        console.log("ERROR: ", e);
        return e;
    }
};

export function getProducts(query="", home=false)
{
    const queryFunctionMap = {
        "q=trending": filterTrendingProducts,
        "q=untapped": filterUntappedProducts
    };
    return (dispatch) => {
        dispatch({
            type: GETTING_PRODUCTS,
        });
        base('Product').select({
            // Selecting the first 3 records in Grid view:,
            // view: "Grid view"
            filterByFormula: "NOT({STATUS} = 'False')"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            let products = records, productOfTheDay = null;
            if (query && query !== "") {
                const filterResponse = queryFunctionMap[query](records);
                products = filterResponse.filteredProducts;
                productOfTheDay = filterResponse.productOfTheDay;
            } else {
                products.forEach((product) => {
                    if (product.fields["Product Status"] && product.fields["Product Status"].includes("Product of The Day")) {
                        productOfTheDay = product;
                    }
                });
            }

            return dispatch({
                type: SET_PRODUCTS,
                payload: {products: home === true ? [] : products, productOfTheDay}
            });
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }
}