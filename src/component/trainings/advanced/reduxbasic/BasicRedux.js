import React from 'react';
import {Section} from "../../../element/section/Section";
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "./store/store";


export const BasicRedux = (props) => {

    const dispatch = useDispatch();
    const storedCounter = useSelector(state => state);
    const onClickHandler1 = () => {
        dispatch({type: Actions.increment1});
    }

    const onClickHandler2 = () => {
        dispatch({type: Actions.increment2});
    }

    return (
        <Section title="Redux"
                 anchor="reduxbasic-anchor"
                 background={props.color}
                 description='Manage global state with Redux'>
            <button type="button" onClick={onClickHandler1}>Increment counter 1</button>
            <button type="button" onClick={onClickHandler2}>Increment counter 2</button>
            <p>Counter 1 : {storedCounter.counter1}</p>
            <p>Counter 2 : {storedCounter.counter2}</p>
        </Section>
    );
};
