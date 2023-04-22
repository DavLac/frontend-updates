import React from 'react';
import {Section} from "../../../element/section/Section";
import {useDispatch, useSelector} from "react-redux";
import {counter3Actions, counter4Actions} from "./store/store";


export const ReduxToolkitMultipleSlice = (props) => {

    const dispatch = useDispatch();
    const storedCounter3 = useSelector(state => state.counter3.counter3);
    const storedCounter4 = useSelector(state => state.counter4.counter4);
    const onClickHandler1 = () => {
        dispatch(counter3Actions.decrement());
    }

    const onClickHandler1b = () => {
        dispatch(counter3Actions.increaseByValue({value: 3}));
    }

    const onClickHandler2 = () => {
        dispatch(counter4Actions.increment());
    }

    const onClickHandler2b = () => {
        dispatch(counter4Actions.decreaseByValue(3));
    }

    return (
        <Section title="Redux toolkit: managing multiple slices"
                 anchor="reduxslice-anchor"
                 background={props.color}
                 description='Redux using toolkit lib and managing multiple slices'>
            <button type="button" onClick={onClickHandler1}>Decrement counter 3</button>
            <button type="button" onClick={onClickHandler1b}>Increase counter 3 by 3</button>
            <br/>
            <button type="button" onClick={onClickHandler2}>Increment counter 4</button>
            <button type="button" onClick={onClickHandler2b}>Decrease counter 4 by 3</button>
            <p>Counter 3 : {storedCounter3}</p>
            <p>Counter 4 : {storedCounter4}</p>
        </Section>
    );
};
