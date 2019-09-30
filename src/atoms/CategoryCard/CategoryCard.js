import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Col, Row, Icon} from "antd";

const Card = styled.div`
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
    height: 100px;
    background: #FFFFFF;
    border-radius: 2px;
    @media only screen and (max-width: 767px) {
        height: 60px
    }
`;

const StatValue = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.65);
    @media only screen and (max-width: 1200px) {
        font-size: 13px;
    }
    
    @media only screen and (max-width: 767px) {
        margin-bottom: 3px;
    }
`;

const StatLabel = styled.div`
    font-size: 15px;
    font-weight: 700;
    color: rgba(58, 161, 255, 0.7)!important;
    @media only screen and (max-width: 1200px) {
        font-size: 13px;
    }
`;

const CategoryIcon = styled(Icon)`
    font-size: 40px;
    color: rgba(0, 0, 0, 0.65) !important;
    @media only screen and (max-width: 1200px) {
        font-size: 25px;
    }
`;

const Column = styled(Col)`
    @media only screen and (max-width: 767px) {
        margin-bottom: 10px;
        padding-left: 0px!important;
        padding-right: 0px!important;
    }
`;

export const CategoryCard = (props) => {
    const {iconType, label, route} = props;
    const CustomCard = (
        <Card>
            <Row gutter={24} style={{height: '100%'}}>
                <Column span={6} style={{height: '100%'}} className="flex align-center justify-center">
                    <CategoryIcon type={iconType} />
                </Column>
                <Column span={18} style={{height: '100%'}} className="flex align-center">
                    <div className="left-align">
                        <StatValue>145</StatValue>
                        <StatLabel>{label}</StatLabel>
                    </div>
                </Column>
            </Row>
        </Card>
    );

    if (route && route.length > 0) {
        return <Link to={route}>{CustomCard}</Link>
    } else {
        return <span>{CustomCard}</span>;
    }
};

class CategoryCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Col xs={12} md={6} lg={6}>
                    <CategoryCard iconType="fire" label={"Trending Courses"} route="/products?q=trending" />
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <CategoryCard iconType="container" label={"Untapped Courses"} route="/products?q=untapped" />
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <CategoryCard iconType="book" label={"Crash Course"} />
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <CategoryCard iconType="flag" label={"7 Day Challenge"} />
                </Col>
            </React.Fragment>
        )
    }
}

export default CategoryCards;