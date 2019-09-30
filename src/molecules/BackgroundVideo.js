import React from "react";
import styled from "styled-components";

import "./index.css";

const VideoContainer = styled.div`
    position: fixed;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 100vh;
`;

export const BackgroundVideo = (props) => {
    return (
        <React.Fragment>
            <video autoPlay muted loop id="video">
                <source src="/Video.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <VideoContainer className="background-video">
                Video
            </VideoContainer>
        </React.Fragment>
    )
};