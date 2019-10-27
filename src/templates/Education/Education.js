import React from "react";
import {DashboardHeader} from "../../atoms/Header/DashboardHeader";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import {EducationCard} from "../../atoms/Card/Card";

class Education extends React.Component {
    render() {
        return (
            <div className="catalog">
                <DashboardHeader header={"Education"} />
                <Row gutter={24}>
                    <Col className="gutter-row" sm={{ span: 15 }} md={{ span: 10 }} lg={{ span: 6 }} xl={{ span: 6 }}>
                        <Link to={`/course-center/1`}><EducationCard /></Link>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Education;