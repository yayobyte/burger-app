import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import { checkFieldValidity, checkFormValidity } from "./../../helpers/";

const LoginContainer = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #CCC;
  border: 1px solid #EEE;
  padding: 10px;
  box-sizing: border-box;
  
  @media(max-width: 500px) {
    width: 100%;
  }
`;

export default ({ login }) => {
    const loading = false;
    const [formValidity, setFormValidity] = useState(false);
    const [loginForm, setLoginForm] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Email Address',
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
                placeholder: 'Password',
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
        login(loginForm.email.elementState.value, loginForm.password.elementState.value);
    };
    return (
        <LoginContainer>
            { loading ?
                <Spinner/>
                :
                <>
                    <h2>Login</h2>
                    <p>Please do not use personal credentials<br />This form is for testing purposes only</p>
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
                    <hr/>
                    <Button className="success" click={submit} disabled={!formValidity}>Order</Button>
                    <Button className="danger" click={login} >Cancel</Button>
                </>
            }
        </LoginContainer>
    );
};
