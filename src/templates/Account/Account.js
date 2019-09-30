import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import styled from "styled-components";
import {Col, Row} from "antd";

import {AccountSettingsInput} from "../../atoms/Input/Input";
import {EditEmail, EditFullName, EditPassword} from "../../atoms/Modal/Modal";

import {updateEmail, updateName, updatePassword} from "../../actions/user.actions";

const SettingsCard = styled.div`
    height: 120px;
    width: 80%;
    margin: 0 auto;
    border-radius: 2px;
    background: #FFFFFF;
    padding: 0 30px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 992px) {
        height: 300px;
        width: 80%;
    }
`;

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: null,
            fullName: '',
            newEmail: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            userId: props.user ? props.user.userId : null,
        }
    }

    handleModalOpen = (modal) => (e) => {
        e.preventDefault();
        this.setState({currentModal: modal});
    };

    handleModalClose = (e) => {
        this.setState({currentModal: null, fullName: '', newEmail: '', currentPassword: '', newPassword: '', confirmPassword: ''});
    };

    handleInputChange = (name) => (e) => {
        this.setState({[name]: e.target.value});
    };

    handleUpdateEmailSubmit = async (e) => {
        const {newEmail, currentPassword, userId} = this.state;
        const response = await this.props.updateEmail({newEmail, currentPassword, userId});
        if (!response.status && response.user) {
            this.setState({currentModal: null});
        }
    };

    handleUpdateNameSubmit = async (e) => {
        const {fullName, userId} = this.state;
        const response = await this.props.updateName({fullName, userId});
        if (!response.status && response.user) {
            this.setState({currentModal: null});
        }
    };

    handleUpdatePasswordSubmit = async (e) => {
        const {currentPassword, newPassword, confirmPassword, userId} = this.state;
        const response = await this.props.updatePassword({currentPassword, newPassword, confirmPassword, userId});
        if (!response.status && response.user) {
            this.setState({currentModal: null});
        }
    };

    render() {
        const {currentModal} = this.state;
        const {user} = this.props.user ? this.props : {user: {}};
        return (
            <div style={{margin: '40px 20px 0px'}}>
                <SettingsCard>
                    <Row gutter={24} style={{width: '100%'}}>
                        <Col className="gutter-row" xs={{span: 24}} lg={{span: 8}}>
                            <AccountSettingsInput
                                handleModalOpen={this.handleModalOpen}
                                name={"edit-name"}
                                type={"text"}
                                value={user.fullName}
                                label={"Full Name"}
                            />
                            <EditFullName
                                isOpen={currentModal === "edit-name"}
                                handleModalClose={this.handleModalClose}
                                handleInputChange={this.handleInputChange}
                                handleSubmit={this.handleUpdateNameSubmit}
                            />
                        </Col>
                        <Col className="gutter-row" xs={{span: 24}} lg={{span: 8}}>
                            <AccountSettingsInput
                                handleModalOpen={this.handleModalOpen}
                                name={"edit-email"}
                                type={"email"}
                                value={user.email}
                                label={"E-mail"}
                            />
                            <EditEmail
                                isOpen={currentModal === "edit-email"}
                                handleModalClose={this.handleModalClose}
                                handleInputChange={this.handleInputChange}
                                handleSubmit={this.handleUpdateEmailSubmit}
                            />
                        </Col>
                        <Col className="gutter-row" xs={{span: 24}} lg={{span: 8}}>
                            <AccountSettingsInput
                                handleModalOpen={this.handleModalOpen}
                                name={"edit-password"}
                                type={"password"}
                                value={user.password}
                                label={"Password"}
                            />
                            <EditPassword
                                isOpen={currentModal === "edit-password"}
                                handleModalClose={this.handleModalClose}
                                handleInputChange={this.handleInputChange}
                                handleSubmit={this.handleUpdatePasswordSubmit}
                            />
                        </Col>
                    </Row>
                </SettingsCard>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        updateEmail,
        updateName,
        updatePassword,
    }, dispatch);
}

function mapStateToProps({auth})
{
    return {
        user: auth.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);