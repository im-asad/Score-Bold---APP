import React from "react";
import styled from "styled-components";
import {Button, Col, Row} from "antd";

import {ProductDetailHeader} from "../atoms/Header/ProductDetailHeader";

export const DetailCard = styled.div`
    width: 100%;
    border-radius: 2px;
    background: #FFFFFF;
    padding: 20px 40px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    @media (max-width: 767px) {
        padding: 20px;
    }
`;

const TabButton = styled(Button)`
    border-radius: 2px !important;
    margin-right: 10px;
    font-weight: 500;
    ${props => props.active ? `color: #40A9FF !important; border-color: #40A9FF !important` : ``}
`;

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
        }
    }

    changeActiveTab = (tab) => (e) => {
        this.setState({activeTab: tab});
    };

    render() {
        const {activeTab} = this.state;
        const {product} = this.props;
        return (
            <DetailCard>
                {product && <React.Fragment>
                    <ProductDetailHeader product={product} />
                    <div className="product-detail-tabs" style={{textAlign: 'left'}}>
                        <TabButton onClick={this.changeActiveTab(1)} active={activeTab === 1}>Description</TabButton>
                        <TabButton onClick={this.changeActiveTab(2)} active={activeTab === 2}>Ad Creative</TabButton>
                        <TabButton onClick={this.changeActiveTab(3)} active={activeTab === 3}>Facebook</TabButton>
                    </div>

                    {activeTab === 1 && <div style={{textAlign: 'left', marginTop: '20px'}}>
                        <p>{product.Description}</p>
                    </div>}

                    {activeTab === 2 && <div style={{textAlign: 'left', marginTop: '20px'}}>
                        <Row gutter={16} style={{display: 'flex', alignItems: 'center'}}>
                            <Col className="gutter-row" md={{span: 24}} lg={{span: 24}} xl={{span: 8}}>
                                {/*<video style={{width: '100%', height: '170px', marginBottom: '16px'}} controls>*/}
                                    {/*<source type="video/mp4" />*/}
                                {/*</video>*/}
                                {(product["Ad Copy Image"] && product["Ad Copy Image"].length > 0) && <img alt="" src={product["Ad Copy Image"][0].url} style={{width: '100%', height: '170px', marginBottom: '16px'}}/> }
                                <br/>
                                {/*<TabButton active block>Download Attachment</TabButton>*/}
                            </Col>
                            <Col className="gutter-row" md={{span: 24}} lg={{span: 24}} xl={{span: 16}}>
                                <div>
                                    {product["Ad Creative"]}
                                </div>
                                <br/>
                                <span className="underline">Copy text</span>
                            </Col>
                        </Row>
                    </div>}

                    {activeTab === 3 && <div style={{textAlign: 'left', marginTop: '20px'}}>
                        <p>{product["Facebook Targeting"]}</p>
                    </div>}
                </React.Fragment> }
            </DetailCard>
        )
    }
}

export default ProductDetail;