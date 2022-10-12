import React from 'react';
import { Section } from "../element/section/Section";

export const Title = () => {
  return (
    <Section background='light'>
      <h1 className="title, h1-main">Frontend training</h1>
      <h2 class="subtitle">Summary</h2>

      <span>Overall training progress : 9 ok, 3 in progress on 12</span>
      <progress class="progress is-success" value="10.5" max="12" style={{width: "400px", border: "1px black solid"}}></progress>
      <ul>
        <li style={{color: "green"}}>ES6 features</li>
        <li style={{color: "green"}}>useState: react to a button</li>
        <li style={{color: "green"}}>useEffect: load API call at runtime</li>
        <li style={{color: "green"}}>useState, submit form, API call with placeholder, map response with a class</li>
        <li style={{color: "orange"}}>React.memo, useMemo, useCallback</li>
        <li style={{color: "orange"}}>useReducer: manage big forms</li>
        <li style={{color: "green"}}>Router + useHistory</li>
        <li style={{color: "green"}}>useContext</li>
        <li style={{color: "orange"}}>Redux</li>
        <li style={{color: "green"}}>Responsive CSS: media queries, flex and grid</li>
        <li style={{color: "green"}}>testing: Jest</li>
        <li style={{color: "green"}}>testing: Cypress</li>
      </ul>
    </Section>
  );
};
