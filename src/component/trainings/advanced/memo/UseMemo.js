import React, {useMemo, useState} from 'react';
import {Section} from "../../../element/section/Section";
import {SubComponentNormal} from "./SubComponentNormal";
import SubComponentMemoizedMemo from "./SubComponentMemoizedMemo";

export const UseMemo = (props) => {
    const [render, setRender] = useState(false);

    const myMemoizedList = useMemo(() => [1, 2, 3, 4, 5],
        []); // no dependencies. Works like useEffect

    const myNormalList = () => [1, 2, 3, 4, 5];

    const rerender = () => {
        setRender(prevRender => !prevRender);
    }

    return (
        <Section
            title="useMemo x React.memo()"
            anchor="usememo-anchor"
            background={props.color}
            description='useMemo: check the logs to see what is re-rendered.
            In JS, 2 same arrays or objects are not equal. [1,2,3] != [1,2,3].
            Why we need useMemo when we pass an array or object as props with React.memo()
            '
        >
            <button type={"button"} onClick={rerender}>Re-render</button>
            <SubComponentMemoizedMemo myList={myMemoizedList}/>
            <SubComponentNormal myList={myNormalList}/>
        </Section>
    );
};