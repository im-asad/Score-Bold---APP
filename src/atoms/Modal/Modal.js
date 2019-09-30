import React from "react";
import styled from "styled-components";
import {Button, Form, Input, Modal} from "antd";

const ModalHeader = styled.div`
    color: black;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
`;

const ModalForm = styled(Form)`
    width: 70%;
    margin: 0 auto !important;
`;

const ActionButton = styled(Button)`
    border-radius: 2px !important;
    width: 40%;
`;

export const EditFullName = (props) => {
    const {handleSubmit, handleModalClose, isOpen, handleInputChange} = props;
    return (
        <Modal
            centered
            visible={isOpen}
            footer={null}
            onCancel={handleModalClose}
        >
            <ModalHeader>Change Name</ModalHeader>
            <ModalForm onSubmit={handleSubmit}>
                <Form.Item colon={false}>
                        <Input
                            onChange={handleInputChange("fullName")}
                            placeholder="New Full Name"
                            autoComplete="off"
                        />
                </Form.Item>
                <Form.Item>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <ActionButton onClick={handleModalClose} type="">
                            Cancel
                        </ActionButton>

                        <ActionButton onClick={handleSubmit} type="primary">
                            Save
                        </ActionButton>
                    </div>
                </Form.Item>
            </ModalForm>
        </Modal>
    )
};

export const EditEmail = (props) => {
    const {handleSubmit, handleModalClose, isOpen, handleInputChange} = props;
    return (
        <Modal
            centered
            visible={isOpen}
            footer={null}
            onCancel={handleModalClose}
        >
            <ModalHeader>Change Login E-mail</ModalHeader>
            <ModalForm onSubmit={handleSubmit}>
                <Form.Item colon={false}>
                    <Input
                        onChange={handleInputChange("newEmail")}
                        placeholder="New E-mail"
                        autoComplete="off"
                    />
                </Form.Item>
                <Form.Item colon={false}>
                    <Input
                        onChange={handleInputChange("currentPassword")}
                        placeholder="Current Password"
                        autoComplete="off"
                        type="password"
                    />
                </Form.Item>
                <Form.Item>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <ActionButton onClick={handleModalClose} type="">
                            Cancel
                        </ActionButton>

                        <ActionButton onClick={handleSubmit} type="primary">
                            Save
                        </ActionButton>
                    </div>
                </Form.Item>
            </ModalForm>
        </Modal>
    )
};

export const EditPassword = (props) => {
    const {handleSubmit, handleModalClose, isOpen, handleInputChange} = props;
    return (
        <Modal
            centered
            visible={isOpen}
            footer={null}
            onCancel={handleModalClose}
        >
            <ModalHeader>Change Password</ModalHeader>
            <ModalForm onSubmit={handleSubmit}>
                <Form.Item colon={false}>
                    <Input
                        onChange={handleInputChange("currentPassword")}
                        placeholder="Current Password"
                        autoComplete="off"
                        type="password"
                    />
                </Form.Item>
                <Form.Item colon={false}>
                    <Input
                        onChange={handleInputChange("newPassword")}
                        placeholder="New Password"
                        autoComplete="off"
                        type="password"
                    />
                </Form.Item>
                <Form.Item colon={false}>
                    <Input
                        onChange={handleInputChange("confirmPassword")}
                        placeholder="Confirm New Password"
                        autoComplete="off"
                        type="password"
                    />
                </Form.Item>
                <Form.Item>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <ActionButton onClick={handleModalClose} type="">
                            Cancel
                        </ActionButton>

                        <ActionButton onClick={handleSubmit} type="primary">
                            Save
                        </ActionButton>
                    </div>
                </Form.Item>
            </ModalForm>
        </Modal>
    )
};