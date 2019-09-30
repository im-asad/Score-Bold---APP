import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { Form, Input, Button, Row, Col } from 'antd';

import {Link} from "react-router-dom";
import {BackgroundVideo} from "../../molecules/BackgroundVideo";
import {submitLogin} from "../../actions/login.actions";

import "./Login.css";

class Login extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.submitLogin(values);
            }
        });
    };

    render() {
        const {loading} = this.props;
        const {getFieldDecorator} = this.props.form;
        return (
            <Row className="login-page-row">
                <Col xl={{span: 17}} className="video-col">
                    <BackgroundVideo/>
                </Col>
                <Col md={{span: 24}} xl={{span: 7}} className="form-col">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div>
                            {/*<Icon style={{fontSize: '50px', color: 'rgba(58, 161, 255, 0.7)', marginBottom: '20px'}} type="unlock" />*/}
                            <img src="/logo.png" style={{marginBottom: '20px', width: '35px'}}/>
                            <h3 style={{color: '#FFFFFF'}}>Sign In</h3>
                        </div>
                        <Form.Item label="E-mail" colon={false}>
                            {getFieldDecorator('email', {
                                rules: [{ message: 'Please input your email!' }],
                            })(
                                <Input
                                    // prefix={<Icon type="user" />}
                                    placeholder="E-mail"
                                    autoComplete="off"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item
                            colon={false}
                            label={
                                <React.Fragment>
                                    <span>Password</span>
                                    <a className="login-form-link right" href="">
                                        Forgot your password?
                                    </a>
                                </React.Fragment>
                            }>
                            {getFieldDecorator('password', {
                                rules: [{ message: 'Please input your Password!' }],
                            })(
                                <Input
                                    // prefix={<Icon type="lock" />}
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button loading={loading} onClick={this.handleSubmit} type="submit" className="blue-button" block>
                                {!loading && <span>Sign in</span> }
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <span style={{color: '#5E6b7D', fontWeight: '600'}}>New User?</span> <Link to="/register" className="login-form-link" href="">Register</Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        submitLogin
    }, dispatch);
}

function mapStateToProps(state)
{
    return {
        loading: state.auth.loading
    }
}

const LoginForm = Form.create({ name: 'login_form' })(connect(mapStateToProps, mapDispatchToProps)(Login));

export default LoginForm;
