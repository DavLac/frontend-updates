import React from 'react';

export const SubComponentNormal = (props) => {
    console.log("Render SubComponentNormal");
    return (
        <button type={"button"} onClick={props.handleClick}>Add normal</button>
    );
};