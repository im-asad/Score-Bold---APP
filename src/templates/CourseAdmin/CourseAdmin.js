import React from "react";
import styled from "styled-components";
import {Col, Row, Button, Divider} from "antd";
import {Link} from "react-router-dom";
import {EducationCard} from "../../atoms/Card/Card";
import FormModal from "../../molecules/FormModal";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {getCourses, addCourse} from "../../actions/course.actions";

const CoursesContainer = styled.div`
    margin: 0 40px;
`;

const fields = [
    {name: 'courseName', message: 'Please enter course name.', placeholder: 'Course Name', label: 'Course Name'}
];

class CourseAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseModalIsOpen: false
        }
    }

    handleAddCourse = e => {
        this.setState({courseModalIsOpen: true});
    };

    handleSubmit = (form) => {
        this.props.addCourse(form);
        this.setState({courseModalIsOpen: false});
    };

    handleClose = () => {
        this.setState({courseModalIsOpen: false});
    };

    componentDidMount = () => {
        this.props.getCourses();
    };

    render() {
        const {courses} = this.props;

        const Courses = courses.map((course, index) => {
            return (
                <Col key={course.courseId} className="gutter-row mb-16 mt-16" sm={{ span: 15 }} md={{ span: 10 }} lg={{ span: 6 }} xl={{ span: 6 }}>
                    <Link to={`/course-center/${course.courseId}`}><EducationCard course={course} /></Link>
                </Col>
            )
        });
        return (
            <CoursesContainer>
                <Divider>Courses</Divider>
                <div className="right-align mb-16" style={{paddingRight: '12px'}}>
                    <Button onClick={this.handleAddCourse} type="primary" icon="plus" size="large">
                        Add Course
                    </Button>
                </div>
                <Row gutter={24}>
                    {Courses}
                </Row>

                <FormModal
                    fields={fields}
                    handleSubmit={this.handleSubmit}
                    handleClose={this.handleClose}
                    isOpen={this.state.courseModalIsOpen}
                />
            </CoursesContainer>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getCourses,
        addCourse
    }, dispatch);
}

function mapStateToProps(state)
{
    return {
        loading: state.course.loading,
        courses: state.course.courses
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseAdmin);