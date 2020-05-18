import React from "react";
import BuildControlContainer from "./BuildControlContainer";

const BuildControl = ({ label, addIngredient, deleteIngredient, disabledButton }) => (
    <BuildControlContainer>
        <div className="label">{label}</div>
        <button
            data-testid={`button-minus-${label}`}
            className="less"
            onClick={deleteIngredient}
            disabled={disabledButton}
        >
            -
        </button>
        <button
            data-testid={`button-plus-${label}`}
            className="more"
            onClick={addIngredient}
        >
            +
        </button>
    </BuildControlContainer>
);

export default BuildControl;
