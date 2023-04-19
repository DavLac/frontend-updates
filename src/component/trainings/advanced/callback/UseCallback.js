import React, {useCallback, useState} from 'react';
import {Section} from "../../../element/section/Section";
import {SubComponentNormal} from "./SubComponentNormal";
import SubComponentMemoizedCallback from "./SubComponentMemoizedCallback";

export const UseCallback = (props) => {
    const [increment, setIncrement] = useState(0);

    const onHandleClickCallback = useCallback(() =>
        // this will return the same function
        // instance between re-renders
        setIncrement(previousIncrement => previousIncrement + 1), []);

    const onHandleClick = () => {
        setIncrement(previousIncrement => previousIncrement + 1)
    };

    return (
        <Section
            title="useCallBack x React.memo()"
            anchor="usecallback-anchor"
            background={props.color}
            description='useCallBack: check the logs to see what is re-rendered.
            When is this useful in React?
            Typically useCallback is helpful when passing callback props to highly optimised child components.
            For example, if a child component that accepts a callback relies on a referential equality check
            (eg: React.memo() or shouldComponentUpdate) to prevent unnecessary re-renders when its props change,
            then it is important that any callback props do not change between renders.
            Remember: useCallback doesn’t memoize the function result'
        >
            <SubComponentMemoizedCallback handleClick={onHandleClickCallback}/>
            <SubComponentNormal handleClick={onHandleClick}/>
            <p>Increment: {increment}</p>
        </Section>
    );
};