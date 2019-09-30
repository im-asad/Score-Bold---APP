import _ from "lodash";

export const sortProducts = (products, orderBy) => {
    return _.orderBy(products, function(product) { return product.fields[orderBy]}, ['asc']);
};