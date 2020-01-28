import React from "react";
import styled from "styled-components";

const InputField = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }
  
  .input-element {
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  
  .input-element:focus {
    outline: none;
    background-color: #ccc;
  }
  
  .invalid {
    border: 1px solid red;
    background-color: #FDA49A;
  }
  
  p.input-error {
    color: red;
    font-size: 0.7em;
    text-align: left;
    margin: 5px 0 0 0;
    visibility: hidden;
    
  }
  
  p.show-error {
    visibility: visible;
  }
  
`;

const HTMLInput = ({ type, name, config, onChange, elementState }) => {
    const { value, touched, valid } = elementState;
    const classes = ['input-element', !valid && touched ? 'invalid' : ''];
    switch (type) {
        case "textarea" :
            return <textarea
                {...config}
                name={name}
                value={value}
                className={classes.join(' ')}
                onChange={onChange}
            />;
        case "select":
            return <select
                name={name}
                value={value}
                onChange={onChange}
                className={classes.join(' ')}
            >
                {config && Object.keys(config.options).map(item => (
                    <option
                        value={config.options[item].value}
                        key={item}
                    >
                        {config.options[item].displayValue}
                    </option>
                ))}
            </select>;
        default:
            return <input
                {...config}
                name={name}
                value={value}
                className={classes.join(' ')}
                onChange={onChange}
            />;
    }
};

const ErrorMessage = ({ valid, touched }) => {
    const classes = ["input-error", (!valid && touched) ? "show-error" : ""];
    return (
        <p className={classes.join(" ")}>Please enter a valid input!</p>
    )
};

const Input = ({ name, type, config, onChange, elementState }) => {
    return (
        <InputField>
            <label htmlFor={name} />
            <HTMLInput
                name={name}
                type={type}
                config={config}
                onChange={onChange}
                elementState={elementState}
            />
            <ErrorMessage valid={elementState.valid} touched={elementState.touched} />
        </InputField>
    )
};

export default Input;
