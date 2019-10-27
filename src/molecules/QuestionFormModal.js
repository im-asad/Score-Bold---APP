import React from "react";
import {Button, Form, Input, Modal, Tooltip, Select, Col, Row, Upload, Icon} from "antd";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";

class FormModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [],
            fileList: [],
            originalFileList: null,
            files: {}
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSubmit(values, this.state.files, this.state.options);
            }
        });
    };

    handleAddOption = e => {
        let {options} = this.state;
        options.push({optionNumber: options.length+1, name: `Option-${options.length+1}`});
        this.setState({options});
    };

    handleRemoveOption = e => {
        let {options} = this.state;
        options.splice(options.length-1);
        this.setState({options});
    };

    fileUpload = (fileFor) => (e) => {
        const {originalFileList} = this.state;
    };

    onUploadStatusChange = (e) => {
        const {file} = e;
        const {files} = this.state;
        if (file.response && file.response.data) {
            const location = file.response.data.Location;
            const fileFor = file.response.fileFor;
            files[fileFor] ? files[fileFor].push(location) : files[fileFor] = [location];
            this.setState({files})
        }
    };

    render() {
        const {options} = this.state;
        const {handleClose, title, handleCorrectAnswerChange} = this.props;
        const {getFieldDecorator} = this.props.form;

        const props = {
            action: 'http://localhost:7000/api/upload',
            listType: 'picture',
            defaultFileList: [...this.state.fileList],
            className: 'upload-list-inline',
            onChange: this.onUploadStatusChange,
        };

        const Options = options.map((option) => {
            return (
                <React.Fragment>
                    <Form.Item label={option.name} colon={false}>
                        {getFieldDecorator(option.name, {
                            rules: [{ message: "Please enter a question!" }],
                        })(
                            <Input
                                placeholder={option.name}
                                autoComplete="off"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label={`${option.name} Image`} colon={false}>
                        <Upload onChange={this.fileUpload(option.name)} {...props} data={{fileFor: option.name}}>
                            <Button>
                                <Icon type="upload" /> Upload
                            </Button>
                        </Upload>
                    </Form.Item>
                </React.Fragment>
            )
        });

        return (
            <Modal
                title={title}
                visible={this.props.isOpen}
                footer={null}
                onCancel={handleClose}
            >
                <div>
                    <Form className="modal-form">
                        <Form.Item label="Question" colon={false}>
                            {getFieldDecorator('question', {
                                rules: [{ message: "Please enter a question!" }],
                            })(
                                <Input
                                    placeholder={"Question"}
                                    autoComplete="off"
                                />
                            )}
                        </Form.Item>

                        <Form.Item label="Question Image" colon={false}>
                            <Upload onChange={this.fileUpload("question")} {...props} data={{fileFor: 'question'}}>
                                <Button>
                                    <Icon type="upload" /> Upload
                                </Button>
                            </Upload>
                        </Form.Item>

                        {Options}

                        <div className="right-align mb-16">
                            {options.length > 0 && <Tooltip placement="top" title={"Remove Option"}>
                                <Button style={{marginLeft: '10px'}} type="primary" shape="circle" icon="close" onClick={this.handleRemoveOption} />
                            </Tooltip> }

                            <Tooltip placement="top" title={"Add Option"}>
                                <Button style={{marginLeft: '10px'}} type="primary" shape="circle" icon="plus" onClick={this.handleAddOption} />
                            </Tooltip>
                        </div>

                        {options.length > 0 && <Form.Item>
                            <Select
                                block
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select Correct Answer"
                                optionFilterProp="children"
                                onChange={handleCorrectAnswerChange}
                            >
                                {options.map((option, index) => {
                                    return (
                                        <Select.Option value={index}>{option.name}</Select.Option>
                                    )
                                })}
                            </Select>
                        </Form.Item> }

                        {options.length > 0 && <Form.Item>
                            {getFieldDecorator('reason', {
                                rules: [{ message: "Please enter the reason, why is this option correct!" }],
                            })(
                                <Input
                                    placeholder={"Reason"}
                                    autoComplete="off"
                                />
                            )}
                        </Form.Item> }

                        <Form.Item style={{marginBottom: '0'}}>
                            <Button onClick={this.handleSubmit} type="submit" className="blue-button" block>
                                <span>Submit</span>
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({

    }, dispatch);
}

function mapStateToProps(state)
{
    return {

    }
}

const QuestionModalForm = Form.create({ name: 'question_modal_form' })(connect(mapStateToProps, mapDispatchToProps)(FormModal));

export default QuestionModalForm;