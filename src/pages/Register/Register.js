import React from "react";
import {Link} from "react-router-dom";
import { Form, Input, Button, Row, Col } from 'antd';
import {BackgroundVideo} from "../../molecules/BackgroundVideo";

import "./Register.css";

class Register extends React.Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Row className="register-page-row">
                <Col xl={{span: 17}} className="video-col">
                    <BackgroundVideo/>
                </Col>
                <Col md={{span: 24}} xl={{span: 7}} className="form-col">
                    <Form onSubmit={this.handleSubmit} className="register-form">
                        <div>
                            <img src="/logo.png" style={{marginBottom: '20px', width: '35px'}}/>
                            <h3 style={{color: '#FFFFFF'}}>Sign Up</h3>
                        </div>
                        <Form.Item label="E-mail" colon={false}>
                            {getFieldDecorator('email', {
                                rules: [{ message: 'Please input your email!' }],
                            })(
                                <Input
                                    placeholder="E-mail"
                                    autoComplete="off"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item
                            colon={false}
                            label="Password"
                        >
                            {getFieldDecorator('password', {
                                rules: [{ message: 'Please input your Password!' }],
                            })(
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item
                            colon={false}
                            label="Confirm Password"
                        >
                            {getFieldDecorator('confirmPassword', {
                                rules: [{ message: 'Please input your Password!' }],
                            })(
                                <Input
                                    type="password"
                                    placeholder="Confirm Password"
                                    autoComplete="off"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item label="Full Name" colon={false}>
                            {getFieldDecorator('fullName', {
                                rules: [{ message: 'Please enter your full name!' }],
                            })(
                                <Input
                                    placeholder="Full Name"
                                    autoComplete="off"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button className="blue-button" block>
                                Sign up
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <span style={{color: '#5E6b7D', fontWeight: '600'}}>Already have an account?</span> <Link to="/login" className="register-form-link" href="">Log in</Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const RegisterFrom = Form.create({ name: 'register_form' })(Register);

export default RegisterFrom;
