import { useEffect } from "react";

const Initializer = ({ checkAuthState }) => {
    useEffect(() => {
        checkAuthState();
    }, [checkAuthState]);
    return null;
};

export default Initializer;
