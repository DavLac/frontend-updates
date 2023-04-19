import React from 'react';

const SubComponentMemoizedMemo = (props) => {
    console.log("Render SubComponentMemoizedMemo");
    return (
        <p>{props.myList}</p>
    );
};

export default React.memo(SubComponentMemoizedMemo);