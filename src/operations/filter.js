export const filterTrendingProducts = (products) => {
    let trendingProducts = [];
    let productOfTheDay = null;
    products.forEach((product) => {
        if (product.fields["Product Status"] && product.fields["Product Status"].includes("Trending")) {
            trendingProducts.push(product);
        }
        if (product.fields["Product Status"] && product.fields["Product Status"].includes("Product of The Day")) {
            productOfTheDay = product;
        }
    });
    return {filteredProducts: trendingProducts, productOfTheDay};
};

export const filterUntappedProducts = (products) => {
    let untappedProducts = [];
    let productOfTheDay = null;
    products.forEach((product) => {
        if (product.fields["Product Status"] && product.fields["Product Status"].includes("Untapped")) {
            untappedProducts.push(product);
        }
        if (product.fields["Product Status"] && product.fields["Product Status"].includes("Product of The Day")) {
            productOfTheDay = product;
        }
    });
    return {filteredProducts: untappedProducts};
};

export const filterBySearch = (products, searchText) => {
    return products.filter((product) => {
        return product.fields["Product Title"].includes(searchText) || product.fields["Description"].includes(searchText);
    });
};