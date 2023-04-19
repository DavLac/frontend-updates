import React from 'react';

export const SubComponentNormal = (props) => {
    console.log("Render SubComponentNormal");
    return (
        <p>{props.myList}</p>
    );
};