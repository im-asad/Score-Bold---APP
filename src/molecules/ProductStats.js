import React from "react";
import {Col, Row} from "antd";

import {FacebookStat, AliExpressStat, AmazonStat} from "../atoms/Stats/Stats";

class ProductStats extends React.Component {
    render() {
        const {product} = this.props;
        return (
            <React.Fragment>
                {product && <Row gutter={24} className="product-stats-row">
                    <Col style={{paddingLeft: '0'}} className="gutter-row" md={{span: 24}} lg={{span: 24}} xl={{span: 8}}>
                        <FacebookStat product={product} />
                    </Col>
                    <Col className="gutter-row left-align" md={{span: 24}} lg={{span: 24}} xl={{span: 8}}>
                        <AliExpressStat product={product} />
                    </Col>
                    <Col className="gutter-row left-align" md={{span: 24}} lg={{span: 24}} xl={{span: 8}}>
                        <AmazonStat product={product} />
                    </Col>
                </Row> }
            </React.Fragment>
        )
    }
}

export default ProductStats;