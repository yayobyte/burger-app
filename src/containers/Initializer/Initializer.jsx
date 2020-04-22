import { useEffect } from "react";

const Initializer = ({ checkAuthState }) => {
    useEffect(() => {
        checkAuthState();
    }, []);
    return null;
};

export default Initializer;
