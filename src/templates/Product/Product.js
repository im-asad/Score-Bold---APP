import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row, Col} from "antd";

import {getProduct} from "../../actions/products.actions";

import ProductDetail from "../../molecules/ProductDetail";
import ProductStats from "../../molecules/ProductStats";
import styled from "styled-components";

import "./Product.css";

export const ImageCard = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 2px;
    background: #FFFFFF;
    padding: 5px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
`;

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            activeImageURL: null
        }
    }

    componentDidMount = async () => {
        const product = await getProduct(this.props.match.params.productId);
        let activeImageURL;
        if (product.fields && product.fields.Images && product.fields.Images.length > 0) {
            activeImageURL = product.fields.Images[0].url;
        }
        this.setState({product, activeImageURL});
    };

    handleImageClick = (url) => (e) => {
        this.setState({activeImageURL: url})
    };

    render() {
        const {product, activeImageURL} = this.state;
        const {fields} = product ? product : {fields: null};
        let Images = [];
        if (fields && fields.Images && fields.Images.length > 0) {
            Images = fields.Images.map((Image, index) => {
                const margin = 5*(fields.Images.length-1);
                return (
                    <img
                        onClick={this.handleImageClick(Image.url)}
                        style={{
                            border: activeImageURL === Image.url ? '2px solid darkgray' : 'none',
                            borderRadius: '2px',
                            objectFit: 'cover',
                            height: '100%',
                            width: `calc((100% - ${margin}px) / ${fields.Images.length})`,
                            padding: '4px',
                            marginRight: index === fields.Images.length - 1 ? '0px' : '5px'
                        }}
                        src={Image.url}
                    />
                )
            });
        }
        return (
            <div style={{margin: '10px 0px', padding: '0 12px'}}>
                {product && <Row gutter={24}>
                    <Col className="gutter-row mb-16" md={{span: 24}} lg={{span: 6}}>
                        <ImageCard>
                            <div style={{height: '80%'}}>
                                <img
                                    style={{objectFit: 'cover', height: '100%', width: '100%'}}
                                    src={activeImageURL}
                                />
                            </div>
                            <div style={{height: '20%'}}>
                                {Images.length > 0 ? Images : null}
                            </div>
                        </ImageCard>
                    </Col>
                    <Col className="gutter-row" md={{span: 24}} lg={{span: 18}}>
                        <ProductDetail product={fields} />
                        <br/><br/>
                        <ProductStats product={fields}/>
                    </Col>
                </Row> }
            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({

    }, dispatch);
}

function mapStateToProps({product})
{
    return {
        products: product.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);