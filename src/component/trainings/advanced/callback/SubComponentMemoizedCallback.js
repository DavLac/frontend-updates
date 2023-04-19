import React from 'react';

const SubComponentMemoizedCallback = (props) => {
    console.log("Render SubComponentMemoizedCallback");
    return (
        <button type={"button"} onClick={props.handleClick}>Add with useCallback</button>
    );
};

export default React.memo(SubComponentMemoizedCallback);