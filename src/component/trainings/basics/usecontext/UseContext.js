
import React, {useState} from 'react';
import { Section } from "../../../element/section/Section";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";
import UserContext from './UserContext';

export const UseContext = (props) => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const onclickHandler = () => {
    setNumber(number + 1);
  }

  const onclickHandler2 = () => {
    setNumber2(number2 + 1);
  }

  return (
    <Section 
      title="useContext" 
      anchor="context-anchor"
      background={props.color} 
      description='Use context for global state'>
      <UserContext.Provider value={{
            ctxIncrement: number,
            ctxIncrement2: number2
        }}>
          <button type="button" onClick={onclickHandler}>Increment number 1</button>
          <button type="button" onClick={onclickHandler2}>Increment number 2</button>
          <br/><br/>
          <Child1 />
          <Child2 />
        </UserContext.Provider>
    </Section>
  );
};
