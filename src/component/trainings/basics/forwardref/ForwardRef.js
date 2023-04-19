import React, {useRef} from 'react';
import {Section} from "../../../element/section/Section";
import {InputText} from "./InputText";

export const ForwardRef = (props) => {
    const inputRef1 = useRef();
    const inputRef2 = useRef();

    const onClickHandler1 = () => {
        inputRef1.current.focus();
    }

    const onClickHandler2 = () => {
        inputRef2.current.focus();
    }

    return (
        <Section title="Forward ref"
                 anchor="forward-anchor"
                 background={props.color}
                 description='Forward ref to child'>
            <p>(Parent)</p>
            <button type="button" onClick={onClickHandler1}>Focus input 1</button>
            <button type="button" onClick={onClickHandler2}>Focus input 2</button>
            <ol>
                <li>
                    <InputText
                        ref={inputRef1}
                        id={"input-test1"}
                    />
                </li>
                <li>
                    <InputText
                        ref={inputRef2}
                        id={"input-test2"}
                    />
                </li>
            </ol>
        </Section>
    );
};
