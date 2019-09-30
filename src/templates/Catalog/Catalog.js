import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row, Col} from "antd";

import {ProductCard} from "../../atoms/Card/Card";
import {FilterSelect, SortSelect} from "../../atoms/Select/Select";
import {DashboardHeader} from "../../atoms/Header/DashboardHeader";
import {Search} from "../../atoms/Input/Input";

import {getProducts} from "../../actions/products.actions";
import {sortProducts} from "../../operations/sort";
import {filterBySearch} from "../../operations/filter";

import "./Catalog.css";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
            orderBy: null,
            searchText: ''
        }
    }

    componentDidMount = () => {
        const filters = ["q=trending", "q=untapped"];
        const {search} = this.props.location;
        this.setState({filter: search.substring(3)});
        this.props.getProducts(filters.includes(search.substring(1)) ? search.substring(1) : "");
    };

    componentDidUpdate = (prevProps, prevState) => {
        const filters = ["q=trending", "q=untapped"];
        const {search} = this.props.location;
        const prevSearch = prevProps.location.search;
        if (search !== prevSearch) {
            this.setState({filter: search.substring(3)});
            this.props.getProducts(filters.includes(search.substring(1)) ? search.substring(1) : "");
        }
    };

    handleFilterChange = (value) => {
        this.props.history.push(`/products?q=${value}`)
    };

    handleOrderChange = (value) => {
        this.setState({orderBy: value});
    };

    onSearch = (value) => {
        this.setState({searchText: value})
    };

    render() {
        let {products} = this.props;
        const {filter, orderBy, searchText} = this.state;

        if (orderBy) {
            products = sortProducts(products, orderBy);
        }
        if (searchText && searchText.length > 0) {
            products = filterBySearch(products, searchText);
        }

        const Products = products.map((product, index) => {
            return (
                <Col key={index} className="gutter-row" sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
                    <Link style={{width: '100%'}} to={`/products/${product.id}`}><ProductCard product={product}/></Link>
                </Col>
            )
        });
        return (
            <div className="catalog">
                <DashboardHeader header={"Courses"} />
                <br/>
                <Row gutter={24}>
                    <div className="search-container">
                        <Search
                            onSearch={this.onSearch}
                        />
                    </div>
                    <div className="select-container">
                        <SortSelect
                            value={orderBy}
                            handleOrderChange={this.handleOrderChange}
                        />
                        <FilterSelect
                            value={filter}
                            handleFilterChange={this.handleFilterChange}
                        />
                    </div>
                </Row>
                <Row gutter={24}>
                    {Products}
                </Row>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getProducts
    }, dispatch);
}

function mapStateToProps({product})
{
    return {
        products: product.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);