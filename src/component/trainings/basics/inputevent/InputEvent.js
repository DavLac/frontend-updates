import React, {useState} from 'react';
import {Section} from "../../../element/section/Section";

export const InputEvent = (props) => {

    const [userInput, setUserInput] = useState({
        input1: 'default empty 1',
        input2: 'default empty 2',
        input3: 'default empty 3'
    });

    const onChangeHandler1 = (event) => setUserInput({...userInput, input1: event.target.value});
    const onChangeHandler2 = (event) => setUserInput({...userInput, input2: event.target.value});
    const onChangeHandler3 = (event) => setUserInput({...userInput, input3: event.target.value});


    return (
        <Section title="Input event"
                 anchor="inputevent-anchor"
                 background={props.color}
                 description='Change component state on input change - managing multiple states properly'>
            <ol>
                <li>
                    <label htmlFor="input-test1">Type something:</label>
                    <input type="text" id="input-test1" onChange={onChangeHandler1}/>
                </li>
                <li>
                    <label htmlFor="input-test2">Type something:</label>
                    <input type="text" id="input-test2" onChange={onChangeHandler2}/>
                </li>
                <li>
                    <label htmlFor="input-test3">Type something:</label>
                    <input type="text" id="input-test3" onChange={onChangeHandler3}/>
                </li>
            </ol>

            <p>Input 1 : {userInput.input1}</p>
            <p>Input 2 : {userInput.input2}</p>
            <p>Input 3 : {userInput.input3}</p>
        </Section>
    );
};
