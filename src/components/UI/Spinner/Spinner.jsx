import React from 'react';
import styled from 'styled-components';
import Lottie from "react-lottie";
import Typography from "@material-ui/core/Typography";
import * as spinnerData from "../../../assets/lotties/burger-spinner.json";

const Spinner = styled.div`

`;

const defaultAuthenticationOptions = {
    loop: true,
    autoplay: true,
    animationData: spinnerData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default () => (
    <Spinner>
        <Lottie
            options={defaultAuthenticationOptions}
            height={175}
            width={150}
            isStopped={false}
            isPaused={false}
        />
        <Typography color="secondary">Loading...</Typography>
    </Spinner>
);
