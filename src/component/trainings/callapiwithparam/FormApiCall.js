
import React, { useRef, useState } from "react";
import { Section } from "../../element/section/Section";
import GenderizeApiGateway from './http/GenderizeApiGateway';
import Skeleton from '@mui/material/Skeleton';

const objectResponseToJsxList = (dataObject) => {
  let rows = [];
  let index = 0;
  for(const [key, value] of Object.entries(dataObject)) {
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

export const FormApiCall = () => {

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
    .then(response => setGenderResponse(objectResponseToJsxList(response.data)))
    .catch(error => setGenderResponse(JSON.stringify(error)))
  }

  return (
    <Section 
    title="useState - submit form - Api call with placeholder" 
    background='dark' 
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
