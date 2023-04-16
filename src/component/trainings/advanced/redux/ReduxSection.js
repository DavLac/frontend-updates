
import React from 'react';
import { Section } from "../../../element/section/Section";
//import { createStore } from redux;

export const ReduxSection = (props) => {

  //createStore();
  
  return (
    <Section title="Redux" 
      anchor="redux-anchor"
      background={props.color} 
      description='Manage global state with Redux'>
      <button type="button" onClick={null}>
        Add number
      </button>
    </Section>
  );
};
