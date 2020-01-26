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
`;

const HTMLInput = ({ inputType, ...props }) => {
    switch (inputType) {
        case "input":
            return <input {...props} name={props.name} className="input-element"/>;
        case "textarea" :
            return <textarea {...props} className="input-element"/>;
        default:
            return <input {...props} className="input-element"/>;
    }
};

const Input = ({ ...props }) => {
    return (
        <InputField>
            <label htmlFor={props.name} />
            <HTMLInput {...props} />
        </InputField>
    )
};

export default Input;
