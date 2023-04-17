import React, {useEffect, useState} from 'react';
import {Section} from "../../../element/section/Section";

export const UseEffectNoDependency = (props) => {

    const [myText, setMyText] = useState(['useState - default value']);

    const handleClick = () => {
        setMyText([...myText, 'state updated - you clicked me']);
    }

    useEffect(() => {
        setMyText([...myText, 'useEffect changed my value after the first render']);
    }, []);

    const renderMyText = () => {
        let rows = [];
        myText.forEach((value, index) => {
            rows.push(<li key={index}>{value}</li>);
        });
        return <ol>{rows}</ol>;
    }

    return (
        <Section title="useEffect with no dependency"
                 anchor="effect1-anchor"
                 background={props.color}
                 description='useEffect with no dependency - run code at runtime once'>
            <button type="button" onClick={handleClick}>Click me</button>
            <p>useState value history with useEffect : {renderMyText()}</p>
        </Section>
    );
};
