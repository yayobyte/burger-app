import React from "react";
import BuildControlContainer from "./BuildControlContainer";

const BuildControl = ({ label, addIngredient, deleteIngredient, disabledButton }) => (
    <BuildControlContainer>
        <div className="label">{label}</div>
        <button className="more" onClick={addIngredient}>+</button>
        <button className="less" onClick={deleteIngredient} disabled={disabledButton}>-</button>
    </BuildControlContainer>
);

export default BuildControl;