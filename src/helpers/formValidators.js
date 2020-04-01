const checkFieldValidity = (value, rules) => {
    let isValid = true;
    const { required, minLength, maxLength } = rules;
    if (required){
        isValid = value.trim() !== '' && isValid;
    }
    if (minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }
    if (maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
};

const checkFormValidity = (form) => {
    if (!form) {
        return null;
    }
    let validity = true;
    Object.keys(form).forEach(key => {
        validity = form[key].elementState.valid && validity
    });
    return validity;
};

export { checkFieldValidity, checkFormValidity };
