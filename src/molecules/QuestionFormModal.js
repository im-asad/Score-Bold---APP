import React from "react";
import {Button, Form, Input, Modal, Tooltip, Select} from "antd";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";

class FormModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log("THESE ARE THE VALUES: ", values);
            if (!err) {
                this.props.handleSubmit(values, this.state.options);
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

    render() {
        const {options} = this.state;
        const {handleClose, title, handleCorrectAnswerChange} = this.props;
        const {getFieldDecorator} = this.props.form;

        const Options = options.map((option) => {
            return (
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
                                />,
                            )}
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