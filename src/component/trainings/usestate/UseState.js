
import React, {useState} from 'react';
import { Section } from "../../element/section/Section";

const titleStyleValid = {
  color: 'green'
}

const titleStyleNotValid = {
  color: 'red'
}

export const UseState = (props) => {

  const [isValid, setIsValid] = useState(true);
  let titleStyle = (isValid === true) ? titleStyleValid : titleStyleNotValid;

  const onclickHandler = () => {
        setIsValid((isValid === true) ? false : true);
        titleStyle = (isValid === true) ? titleStyleNotValid : titleStyleValid;
  }

  return (
    <Section title="useState" background={props.color} description='Change component state on button click'>
      <p style={titleStyle}>
        Hello world ({isValid ? 'isValid' : 'isNotValid'})
      </p>

      <button type="button" onClick={onclickHandler}>
        Change validity
      </button>
    </Section>
  );
};
