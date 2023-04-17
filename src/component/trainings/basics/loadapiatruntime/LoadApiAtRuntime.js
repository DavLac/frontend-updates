
import React, { useState, useEffect } from 'react';
import { Section } from "../../../element/section/Section";
import BoredApiGateway from './http/BoredApiGateway';

const objectResponseToJsxList = (dataObject) => {
  let rows = [];
  let index = 0;
  for(const [key, value] of Object.entries(dataObject)) {
    rows.push(<li key={index}>{key} : {value}</li>);
    index++;
  }
  return <ul>{rows}</ul>;
}

export const LoadApiAtRuntime = (props) => {
  const [updateActivity, setUpdateActivity] = useState(0);
  const [activity, setActivity] = useState();

  useEffect(() => {
    setActivity('Loading...');
    BoredApiGateway.getActivity()
    .then(res => setActivity(objectResponseToJsxList(res.data)))
    .catch(error => setActivity(JSON.stringify(error)))
  }, [updateActivity]);

  const updateActivityHanler = () => {
    setUpdateActivity(updateActivity + 1);
  }

  return (
    <Section 
      title="useEffect/Load Api at runtime" 
      anchor="effect2-anchor"
      background={props.color} 
      description='Fetch and display GET api call (Axios) after 1st render + onClick 
      + read an object with for..in loop 
      + manage useEffect infinite loop'
      subDescription='
      What does useEffect do? By using this Hook, you tell React 
      that your component needs to do something AFTER render. 
      React will remember the function you passed (we will refer to it as our “effect”), 
      and call it later after performing the DOM updates. In this effect, 
      we set the document title, but we could also perform data fetching or call some other imperative API.
      '
    >
      <p>Bored is a free API to find something to do by getting suggestions for random activities.</p>
      <button type="button" 
        onClick={updateActivityHanler}
        disabled={activity === 'Loading...'}
      >Get another activity</button>
      <br/><br/>
      <div>Response : <br/>{(activity) ? <>{activity}</> : null}</div>
    </Section>
  );
};
