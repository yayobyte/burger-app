import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { Typography, Paper } from '@material-ui/core';
import LoginIcon from "@material-ui/icons/LockOpen";
import RegisterIcon from "@material-ui/icons/Add";
import { Redirect } from "react-router-dom";
import { Input, Button } from "../../components/UI";
import { checkFieldValidity, checkFormValidity } from "./../../helpers/";
import { SIGN_IN, SIGN_UP } from "../../config";
import * as userData from "../../assets/lotties/user.json";
import * as authenticationData from "../../assets/lotties/authentication.json";

export const LoginContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  padding: 10px;
  box-sizing: border-box;
  
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  
  .login-paper {
    padding: 20px 10px;
    margin: 15px 10px;
    text-align: center;
  }
  .info {
    margin: 15px 0;
    font-weight: 400;
    font-size: 0.7em;
    color: darkgrey;
  }
  
  .lottie-user {
    margin: 15px 0 0 -15px;
  }
  
  .lottie-auth {
    margin-top: 15px;
  }
  
  @media(max-width: 500px) {
    width: 100%;
  }
`;

export default ({ login, isAuthenticated, redirectToPath }) => {
    const [formValidity, setFormValidity] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);
    const [loginForm, setLoginForm] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Email Address',
                id: "email-input",
            },
            validation: {
                required: true,
                isEmail: true,
            },
            elementState: {
                value: '',
                valid: false,
                touched: false,
            },
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                label: 'Password',
                id: 'password-input',
            },
            validation: {
                required: true,
                minLength: 8,
            },
            elementState: {
                value: '',
                valid: false,
                touched: false,
            },
        },
    });
    const defaultUserOptions = {
        loop: true,
        autoplay: true,
        animationData: userData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultAuthenticationOptions = {
        loop: true,
        autoplay: true,
        animationData: authenticationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const setValue = ({ target: { value }}, key) => {
        const newFormState = { ...loginForm };
        newFormState[key].elementState = {
            ...newFormState[key].elementState,
            valid : newFormState[key].validation && checkFieldValidity(value, newFormState[key].validation),
            touched: true,
            value,
        };
        setFormValidity(checkFormValidity(loginForm));
        setLoginForm({ ...newFormState });
    };
    const submit = () => {
        const method = isSignIn ? SIGN_IN : SIGN_UP;
        login(loginForm.email.elementState.value, loginForm.password.elementState.value, method);
    };
    if (isAuthenticated) {
        return <Redirect to={redirectToPath} />
    }
    return (
        <LoginContainer>
            {isSignIn ? (
                <div>
                    <Typography variant="h2" color="secondary" align="center">Login</Typography>
                    <div className="lottie-user">
                        <Lottie options={defaultUserOptions}
                            height={175}
                            width={150}
                            isStopped={false}
                            isPaused={false}
                        />
                    </div>
                </div>
            )
            :
            (<div>
                <Typography id="header" variant="h2" color="secondary" align="center">Register</Typography>
                <div className="lottie-auth">
                    <Lottie options={defaultAuthenticationOptions}
                        height={175}
                        width={150}
                        isStopped={false}
                        isPaused={false}
                    />
                </div>
            </div>)
            }
            <Paper elevation={3} className="login-paper">
                <Typography className="info" align="center">
                    Powered by <strong>Google Firebase</strong>. Passwords will never be stored
                </Typography>
                <form>
                    {
                        Object.keys(loginForm).map((item) => (
                            <Input
                                key={item}
                                name={item}
                                type={loginForm[item].elementType}
                                config={loginForm[item].elementConfig}
                                elementState={loginForm[item].elementState}
                                onChange={(target) => setValue(target, item)}
                            />
                        ))
                    }
                </form>
                <Button
                    id="login-button"
                    onClick={submit}
                    disabled={!formValidity}
                    variant="contained"
                    color="secondary"
                    startIcon={isSignIn ? <LoginIcon /> : <RegisterIcon />}
                    fullWidth={false}
                    size="large"
                >
                    {isSignIn ? "Login" : "Register"}
                </Button>
            </Paper>
            <div className="buttons" >
                <Button
                    id="switch-button"
                    onClick={() => setIsSignIn(!isSignIn)}
                    color="primary"
                >
                    Switch to {isSignIn ? 'Register' : "Login"}
                </Button>
            </div>
        </LoginContainer>
    );
};
