import React from "react";
import styled from "styled-components";
import {Input, Form} from "antd";

import "../index.css";

const FieldLabel = styled.span`
    font-weight: 600;
    color: rgba(0, 0, 0, 0.45);
`;

const FieldInput = styled(Input)`
    background: #EFF3F6 !important;
`;

const EditFieldLink = styled.a`
    float: right;
    text-decoration: underline;
`;

export const AccountSettingsInput = (props) => {
    const {label, placeholder, type, value, handleModalOpen, name, handleInputChange} = props;
    return (
        <Form.Item
            colon={false}
            label={
                <React.Fragment>
                    <FieldLabel>{label}</FieldLabel>
                    <EditFieldLink onClick={handleModalOpen(name)}>
                        Edit
                    </EditFieldLink>
                </React.Fragment>
            }>
            <FieldInput
                type={type}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
            />
        </Form.Item>
    )
};

export const Search = (props) => {
    return (
        <Input.Search
            placeholder="Search..."
            onChange={e => props.onSearch(e.target.value)}
            className="custom-search"
        />
    )
};