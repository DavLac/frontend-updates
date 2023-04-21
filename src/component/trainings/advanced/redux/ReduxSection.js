import React from 'react';
import {Section} from "../../../element/section/Section";
import {useDispatch, useSelector} from "react-redux";


export const ReduxSection = (props) => {

    const dispatch = useDispatch();
    const storedCounter = useSelector(state => state);
    const onClickHandler = () => {
        dispatch({type: "increment"});
    }

    return (
        <Section title="Redux"
                 anchor="redux-anchor"
                 background={props.color}
                 description='Manage global state with Redux'>
            <button type="button" onClick={onClickHandler}>
                Add number
            </button>
            <p>Counter 1 : {storedCounter.counter1}</p>
            <p>Counter 2 : {storedCounter.counter2}</p>
        </Section>
    );
};
