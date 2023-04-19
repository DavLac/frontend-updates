import React from 'react';

const SubComponentMemoizedCallback = (props) => {
    console.log("Render SubComponent1");
    return (
        <button type={"button"} onClick={props.handleClick}>Add with useCallback</button>
    );
};

export default React.memo(SubComponentMemoizedCallback);