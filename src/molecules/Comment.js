import React from "react";
import styled from "styled-components";
import {Divider} from "antd";

const Commentator = styled.div`
    font-size: 15px;
    font-weight: 600;
`;

const Time = styled.div`
    color: darkgray;
    font-size: 12px;
    font-weight: 600;
`;

const CommentText = styled.div`
    font-size: 14px;
`;

export const Comment = (props) => {
    return (
        <div>
            <Commentator>Ian Morgan</Commentator>
            <Time>3 hours ago</Time>
            <br/>
            <CommentText>This is a new comment by Ian Morgan. Lorem Ipsum ...</CommentText>
            <Divider style={{height: '2px'}}/>
        </div>
    )
};