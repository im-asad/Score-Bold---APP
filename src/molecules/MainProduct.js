import React from "react";
import styled from "styled-components";

import {Row, Col} from "antd";
import {MainProductDetailHeader} from "../atoms/Header/ProductDetailHeader";
import {KeyValue} from "../atoms/KeyValue/KeyValue";
import {FinancialHeader} from "../atoms/Header/ProductDetailHeader";
import {ProductCard} from "../atoms/Card/Card";
import {Link} from "react-router-dom";

const MainProductDetailContainer = styled.div`
    padding: 15px;
    text-align: left;
    @media only screen and (max-width: 767px) {
        padding: 7px
    }
`;

class MainProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {product} = this.props;
        const {fields} = product;
        return (
            <Link style={{width: '100%'}} to={`/products/${product.id}`}>
                <Row gutter={24} style={{height: '100%'}}>
                    <Col xs={8} md={10} lg={12} style={{height: '100%', padding: 0, borderRadius: '2px', paddingBottom: '4px'}}>
                        <img src={fields.Images[0].url} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px'}}/>
                    </Col>
                    <Col xs={16} md={14} lg={12}>
                        <MainProductDetailContainer>
                            <MainProductDetailHeader product={fields} />
                            <h4>{fields["Product Title"]}</h4>
                            <p style={{color: 'darkgray'}}>{fields["Description"].length < 150 ? fields["Description"] : `${fields["Description"].substring(0, 150)}...`}</p>
                            <FinancialHeader>
                                <KeyValue font="small" attr={"Price:"} value={`$${fields.MSRP}`}/>
                                <KeyValue font="small" attr={"Profit:"} value={`$${fields.Profit}`}/>
                            </FinancialHeader>
                        </MainProductDetailContainer>
                    </Col>
                </Row>
            </Link>
        )
    }
}

export default MainProduct;