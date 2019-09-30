import React from "react";
import styled from "styled-components";

const Header = styled.div`
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    text-align: center
`;

export const DashboardHeader = (props) => {
    return (
        <Header>{props.header}</Header>
    )
};
