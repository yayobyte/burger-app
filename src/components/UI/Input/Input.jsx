import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const InputField = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  
`;

const HTMLInput = ({ type, name, config, onChange, elementState }) => {
    const { value, touched, valid } = elementState;
    const { variant } = config;
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
            return <Select
                name={name}
                value={value}
                onChange={onChange}
                variant={variant || "outlined"}
                fullWidth
            >
                {config && Object.keys(config.options).map(item => (
                    <MenuItem
                        value={config.options[item].value}
                        key={item}
                    >
                        {config.options[item].displayValue}
                    </MenuItem>
                ))}
            </Select>;
        default:
            return (
                <TextField
                    {...config}
                    variant={variant || "outlined"}
                    fullWidth
                    error={!valid && touched}
                    name={name}
                    value={value}
                    onChange={onChange}
                    helperText={!valid && touched ? "Incorrect entry." : ""}
                />
            );
    }
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
        </InputField>
    )
};

export default Input;
