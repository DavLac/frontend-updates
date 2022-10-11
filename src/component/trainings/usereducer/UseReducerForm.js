
import React, {useState} from 'react';
import { Section } from "../../element/section/Section";
import { FormChild } from './FormChild';

export const UseReducerForm = (props) => {

  const [formValues, setFormValues] = useState();
  //const [state, dispatch] = useReducer(reducer, initialFormState);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formResult = {};
    for(const inputTarget of e.target) {
        if((inputTarget.type === "radio" && inputTarget.checked === true) || 
            (inputTarget.name !== "" && inputTarget.type !== "radio")) {
              if(inputTarget.type === "checkbox") {
                formResult[`${inputTarget.name}`] = `${inputTarget.checked}`;
              } else {
                formResult[`${inputTarget.name}`] = inputTarget.value;
              }
            
        }
      }
    setFormValues(objectToJsxList(formResult));
  }

  const objectToJsxList = (object) => {
    let rows = [];
    let index = 0;
    for(const [key, value] of Object.entries(object)) {
      rows.push(<li key={index}>{key} : {value}</li>);
      index++;
    }
    return <ul>{rows}</ul>;
  }

  return (
    <Section 
    title="useReducer form with main input types - BEM CSS - flex" 
    background={props.color}
    description='Get big form with most common input types and display them + using BEM CSS with flex'>
      <form onSubmit={onSubmitHandler} className='form--flex'>
        <FormChild>
          <label htmlFor="cheese">Do you like cheese?</label>
          <input type="checkbox" name="cheese" id="cheese"></input>
        </FormChild>
        
        <FormChild>
          <label htmlFor="cars">Choose your favorite car</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </FormChild>

        <FormChild>
          <label htmlFor="favcolor">Pick your favorite color</label>
          <input type="color" name="favcolor" id="favcolor"></input>
        </FormChild>

        <FormChild>
          <label htmlFor="dob">Date of birth</label>
          <input type="date" name="dob" id="dob" max="2002-12-31"></input>
        </FormChild>

        <FormChild>
          <label htmlFor="email">Mail</label>
          <input type="email" name="email" id="email"></input>
        </FormChild>

        <FormChild>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username"></input>
        </FormChild>

        <FormChild>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"></input>
        </FormChild>

        <FormChild>
        <fieldset>
            <legend>Choose your favorite coding language</legend>

            <input type="radio" id="java" name="fav_language" value="Java" />
            <label htmlFor="java">Java</label>
            <input type="radio" id="python" name="fav_language" value="Python" />
            <label htmlFor ="python">Python</label>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
            <label htmlFor="javascript">JavaScript</label>
          </fieldset>
        </FormChild>
        
        <FormChild>
          <label htmlFor="height">Select your height in cm (50 to 250cm)</label>
          <input type="range" id="height" name="height" min="50" max="250" />
        </FormChild>

        <button type="submit">Submit form</button>
      </form>

      <br/>
      <br/>

      <p>Form infos :</p>
      {formValues}
    </Section>
  );
};