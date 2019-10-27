import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Row, Col, Divider, List, Button} from "antd";

import "./Course.css";
import FormModal from "../../molecules/FormModal";

import {addChapter, getChapters} from "../../actions/chapter.actions";
import {getCourse} from "../../actions/course.actions";

const fields = [
    {name: 'chapterName', message: 'Please enter chapter name.', placeholder: 'Chapter Name', label: 'Chapter Name'},
    {name: 'description', message: 'Please enter description.', placeholder: 'Description', label: 'Description'}
];

const CourseTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    text-align: left;
`;

const CourseDescription = styled.div`
    font-size: 13px;
    text-align: left;
    margin: 20px 0
`;

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chapterModalIsOpen: false
        }
    }

    handleAddChapter = e => {
        this.setState({chapterModalIsOpen: true});
    };

    handleSubmit = (form) => {
        const {courseId} = this.props.course;
        this.props.addChapter(form, courseId);
        this.setState({chapterModalIsOpen: false});
    };

    handleClose = () => {
        this.setState({chapterModalIsOpen: false});
    };

    componentDidMount = () => {
        const {courseId} = this.props.match.params;
        this.props.getCourse(courseId);
    };

    render() {
        const {chapters} = this.props;
        return (
            <div className="course">
                <Row gutter={24}>
                    <Divider>Course</Divider>
                    <br/>
                    <Col xs={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 16}} className="left-align">
                        <div className="course-video-container">
                            <iframe title="video-title" className="course-video" src="https://www.youtube.com/embed/Dmq88kA5NxQ"
                                    allowFullScreen />
                        </div>
                        <div>
                            <CourseTitle>Description</CourseTitle>
                            <CourseDescription>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </CourseDescription>
                        </div>
                    </Col>
                    <Col xs={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 8}} className="left-align">
                        <div className="right-align">
                            <Button onClick={this.handleAddChapter} type="primary" icon="plus" size="large">
                                Add Chapter
                            </Button>
                        </div>
                        <Divider>Chapters</Divider>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: page => {

                                },
                                pageSize: 3,
                            }}
                            dataSource={chapters}
                            renderItem={item => (
                                <Link to={`${this.props.match.url}/chapter/${item.chapterId}`}><List.Item
                                    key={item.chapterId}
                                >
                                    <List.Item.Meta
                                        title={<a href={item.href}>{item.chapterName}</a>}
                                        description={item.description}
                                    />
                                </List.Item></Link>
                            )}
                        />
                    </Col>
                </Row>

                <FormModal
                    title={"Add Chapter"}
                    fields={fields}
                    handleSubmit={this.handleSubmit}
                    handleClose={this.handleClose}
                    isOpen={this.state.chapterModalIsOpen}
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getChapters,
        addChapter,
        getCourse
    }, dispatch);
}

function mapStateToProps(state)
{
    return {
        loading: state.course.loading,
        chapters: state.course.chapters,
        course: state.course.activeCourse,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);