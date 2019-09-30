import React from "react";
import styled from "styled-components";

const Key = styled.span`
    font-size: ${props => (props.font && props.font === "small") ? '16px' : "18px"};
    color: grey;
    font-weight: 600;
    @media (max-width: 767px) {
        font-size: 15px;
    }
`;

const Value = styled.span`
    font-size: ${props => (props.font && props.font === "small") ? '16px' : "18px"};
    font-weight: 600;
    color: #1890FF;
    margin-left: 10px;
    @media (max-width: 767px) {
        font-size: 15px;
    }
`;

export const KeyValue = (props) => {
    const {attr, value, font} = props;
    return (
        <div style={{display: 'block'}}>
            <Key font={font}>{attr}</Key><Value font={font}>{value}</Value>
        </div>
    )
};