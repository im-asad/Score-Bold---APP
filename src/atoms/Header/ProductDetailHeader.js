import React from "react";
import styled from "styled-components";
import {Divider, Icon} from "antd";

import {KeyValue} from "../KeyValue/KeyValue";
import Dashboard from "../../pages/Dashboard/Dashboard";

const Header = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    color: #000000;
    @media (max-width: 767px) {
        font-size: 17px;
    }
`;

const MainHeader = styled.div`
    font-size: 17px;
    font-weight: 600;
    text-align: left;
    color: #000000;
    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

export const FinancialHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ProductDetailHeader = (props) => {
    const {product} = props;
    return (
        <div className="product-detail-header">
            <Header>{product["Product Title"]}</Header>
            <FinancialHeader>
                <KeyValue attr={"COGS:"} value={`$${product.COGS ? product.COGS : 0.00}`}/>
                <KeyValue attr={"Price:"} value={`$${product.MSRP ? product.MSRP : 0.00}`}/>
                <KeyValue attr={"Profit:"} value={`$${product.Profit ? product.Profit : 0.00}`}/>
            </FinancialHeader>
            <Divider />
        </div>
    )
};

export const MainProductDetailHeader = (props) => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <MainHeader>Product of the day</MainHeader>
                <Icon style={{position: 'absolute', right: '20px', fontSize: '22px', color: '#FFD700'}} fill="#FFD700" type="star" />
            </div>
            <Divider style={{margin: '15px 0'}} />
        </div>
    )
};


