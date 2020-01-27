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

const HTMLInput = ({ type, name, config, value, onChange }) => {
    switch (type) {
        case "input":
            return <input
                {...config}
                name={name}
                value={value}
                className="input-element"
                onChange={onChange}
            />;
        case "textarea" :
            return <textarea
                {...config}
                name={name}
                value={value}
                className="input-element"
                onChange={onChange}
            />;
        case "select":
            return <select
                name={name}
                value={value}
                onChange={onChange}
                className="input-element"
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
                className="input-element"
                onChange={onChange}
            />;
    }
};

const Input = ({ name, type, config, value, onChange }) => {
    return (
        <InputField>
            <label htmlFor={name} />
            <HTMLInput
                name={name}
                type={type}
                config={config}
                value={value}
                onChange={onChange}
            />
        </InputField>
    )
};

export default Input;
