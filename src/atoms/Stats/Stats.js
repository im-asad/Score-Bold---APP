import React from "react";
import styled from "styled-components";
import {Col, Row, Icon, Tooltip} from "antd";

const Stats = styled.div`
    height: 140px;
    width: 100%;
    background: #FFFFFF;
    padding: 0 15px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    @media (max-width: 1200px) {
        margin-bottom: 10px;
    }
`;

const Header = styled.div`
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    color: #000000
`;

const BlueIcon = styled(Icon)`
    color: #1890FF !important;
    font-size: 15px;
`;

const StatUnit = (props) => {
    const {toolTipText, iconType, value} = props;
    return (
        <div className="center-align">
            <Tooltip placement="top" title={toolTipText}>
                <BlueIcon type={iconType} />
            </Tooltip>
            <br/>
            <b>{value}</b>
        </div>
    )
};

export const FacebookStat = (props) => {
    const {product} = props;
    return (
        <Stats>
            <Row gutter={24} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '130px'}}>
                <Col span={24}>
                    <Header>Facebook</Header>
                </Col>
                <Col className="gutter-row left-align flex space-between" span={24}>
                    <StatUnit toolTipText="Facebook Likes" iconType="like" value={product["Facebook Likes"]} />
                    <StatUnit toolTipText="Facebook Comments" iconType="wechat" value={product["Facebook Comments"]} />
                    <StatUnit toolTipText="Facebook Shares" iconType="upload" value={product["Facebook Shares"]} />
                </Col>
                <Col className="gutter-row left-align" span={24}>
                    <a href={product["Facebook Competitor Ad"]} target="_blank">Competitor's Ad</a>
                </Col>
            </Row>
        </Stats>
    )
};

export const AliExpressStat = (props) => {
    const {product} = props;
    return (
        <Stats>
            <Row gutter={24} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '130px'}}>
                <Col span={24}>
                    <Header>Ali Express</Header>
                </Col>
                <Col className="gutter-row flex space-between" span={24}>
                    <StatUnit toolTipText="Ali Express Shipping Cost" iconType="dollar" value={product["Ali Express Shipping Cost"]} />
                    <StatUnit toolTipText="Ali Express Shipping Origin" iconType="rise" value={product["Ali Express Shipping Origin"]} />
                    <StatUnit toolTipText="Ali Express Shipping Duration" iconType="schedule" value={product["Ali Express Shipping Rate"]} />
                </Col>
                <Col className="gutter-row left-align" span={24}>
                    <a target="_blank" href={product["Ali Express Supplier Link"]}>Supplier</a>
                </Col>
            </Row>
        </Stats>
    )
};

export const AmazonStat = (props) => {
    const {product} = props;
    return (
        <Stats>
            <Row gutter={24} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '130px'}}>
                <Col span={24}>
                    <Header>Amazon</Header>
                </Col>
                <Col className="gutter-row left-align flex space-between" span={24}>
                    <StatUnit toolTipText="Amazon Rank" iconType="number" value={product["Amazon Rank"]} />
                    <StatUnit toolTipText="Amazon Ratings" iconType="star" value={product["Amazon Ratings"]} />
                    <StatUnit toolTipText="Amazon Sellers" iconType="user" value={product["Amazon Sellers"]} />
                </Col>
                <Col className="gutter-row left-align" span={24}>
                    <a href={product["Amazon Product Link"]} target="_blank">Product</a>
                </Col>
            </Row>
        </Stats>
    )
};