import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row} from "antd";

import CategoryCards from "../../atoms/CategoryCard/CategoryCard";
import {getProducts} from "../../actions/products.actions";

import "./Home.css";

class DashboardHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        }
    }

    componentDidMount = async () => {
    };

    render() {
        return (
            <div className="dashboard-home">
                <Row gutter={24}>
                    <CategoryCards />
                </Row>
                <br/>
                {/*<Row gutter={24}>*/}
                    {/*<Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }}>*/}
                        {/*<div className="main-product-container">*/}
                            {/*{productOfTheDay && <MainProduct product={productOfTheDay}/>}*/}
                        {/*</div>*/}
                    {/*</Col>*/}
                    {/*<Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }}>*/}
                        {/*<div className="media-container">*/}
                            {/*<iframe*/}
                                {/*className="home-video"*/}
                                {/*src="https://www.youtube.com/embed/sQQsvVhNs-k"*/}
                                {/*frameBorder="0"*/}
                            {/*/>*/}
                        {/*</div>*/}
                    {/*</Col>*/}
                {/*</Row>*/}
                {/*<br/>*/}
                {/*<Row gutter={24}>*/}
                    {/*<DashboardHeader header={"Recently Viewed Products"} />*/}
                    {/*<br/><br/>*/}
                    {/*{product && <Col className="gutter-row" sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>*/}
                        {/*<Link style={{width: '100%'}} to={`/products/${product.id}`}><ProductCard product={product}/></Link>*/}
                    {/*</Col> }*/}
                {/*</Row>*/}
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
        products: product.products,
        productOfTheDay: product.productOfTheDay,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);