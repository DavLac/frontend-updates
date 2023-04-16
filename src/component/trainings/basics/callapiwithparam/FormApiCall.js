
import React, { useRef, useState } from "react";
import { Section } from "../../../element/section/Section";
import GenderizeApiGateway from './http/GenderizeApiGateway';
import Skeleton from '@mui/material/Skeleton';

class GenderResponse {
  constructor(data) {
    this.count = data.count;
    this.gender = data.gender;
    this.name = data.name;
    this.probability = data.probability;
  }
};

const objectResponseToJsxList = (genderResponse) => {
  let rows = [];
  let index = 0;
  for(const [key, value] of Object.entries(genderResponse)) {
    rows.push(<li key={index}>{key} : {value}</li>);
    index++;
  }
  return <ul>{rows}</ul>;
}

const getFieldSkelton = () => <Skeleton variant="rectangular" width={50} height={15} style={{display: "inline-block"}} />;

const generatePlaceholder = () => {
  return <ul>
            <li>count : {getFieldSkelton()}</li>
            <li>gender : {getFieldSkelton()}</li>
            <li>name : {getFieldSkelton()}</li>
            <li>probability : {getFieldSkelton()}</li>
          </ul>;
}

export const FormApiCall = (props) => {

  const [genderResponse, setGenderResponse] = useState();
  const [formValid, setFormValid] = useState(false);
  const nameInputRef = useRef();

  const nameInputHandler = () => {
    setFormValid(nameInputRef.current.value.length > 0);
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    setGenderResponse(generatePlaceholder());
    GenderizeApiGateway.getGenderByName(nameInputRef.current.value)
    .then(response => setGenderResponse(
      objectResponseToJsxList(new GenderResponse(response.data))))
    .catch(error => setGenderResponse(JSON.stringify(error)))
  }

  return (
    <Section 
      title="useState, useRef - submit form - Api call with placeholder - map response with a class" 
      anchor="api-anchor"
      background={props.color}
      description='Fetch and display GET api call (Axios) with placeholder
      + submit form (prevent default page refresh on submit click)
      + disable button based on input onChange'
      >
      <p>Predict the gender of a person based on their name</p>
      <form onSubmit={onSubmitHandler}>
        <label>Name</label>
        <input type="text" ref={nameInputRef} onChange={nameInputHandler}></input>
        <button type="submit" disabled={!formValid}>Get gender</button>
      </form>
      <br/>
      <div>Response : <br/>{(genderResponse) ? <>{genderResponse}</> : null}</div>
    </Section>
  );
};
