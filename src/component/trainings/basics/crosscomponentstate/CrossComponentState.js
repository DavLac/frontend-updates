
import React, {useState} from 'react';
import { Section } from "../../../element/section/Section";
import { Child } from "./Child";

export const CrossComponentState = (props) => {
  const [number, setNumber] = useState(0);

  const onclickHandler = () => {
      setNumber(number + 1);
  }

  return (
    <Section title="Cross component state - Child to parent" 
        anchor="cross-anchor"
        background={props.color} 
        description='Passing function to child component'>
      <button type="button" onClick={onclickHandler}>
        Parent add button
      </button>

      <Child onclickChild={onclickHandler} />

      <p>Number : {number}</p>
    </Section>
  );
};
