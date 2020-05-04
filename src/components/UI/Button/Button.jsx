import React from 'react';
import { Button } from "@material-ui/core";

export default ({ children, ...rest }) => (
    <Button
        {...rest}
    >
        {children}
    </Button>
);
