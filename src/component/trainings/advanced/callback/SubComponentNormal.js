import React from 'react';

export const SubComponentNormal = (props) => {
    console.log("Render SubComponent2");
    return (
        <button type={"button"} onClick={props.handleClick}>Add normal</button>
    );
};