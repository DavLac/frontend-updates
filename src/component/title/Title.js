import React from 'react';
import { Section } from "../element/section/Section";

const summaryTitles = [
  {title: "ES6 features", anchor: "#es6-anchor", color: "green"},
  {title: "useState: react to a button", anchor: "#state-anchor", color: "green"},
  {title: "Clean event listener", color: "red"},
  {title: "Cross component state - child to parent", anchor: "#cross-anchor", color: "green"},
  {title: "useEffect: load API call at runtime", anchor: "#effect-anchor", color: "green"},
  {title: "Clean API call", color: "red"},
  {title: "useState, submit form, API call with placeholder, map response with a class", anchor: "#api-anchor", color: "green"},
  {title: "React.memo, useMemo, useCallback", anchor: "#memo-anchor", color: "orange"},
  {title: "useReducer: manage big forms", anchor: "#form-anchor", color: "orange"},
  {title: "Router + useHistory", anchor: "#router-anchor", color: "green"},
  {title: "useContext", anchor: "#context-anchor", color: "green"},
  {title: "Redux", anchor: "#redux-anchor", color: "orange"},
  {title: "Responsive CSS: media queries, flex and grid", anchor: "#responsive-anchor", color: "green"},
  {title: "Testing: Jest", color: "green"},
  {title: "Testing: Cypress", color: "green"}
]

const generateSummaryTitles = () => {
  return summaryTitles.map((e, index) => 
      <li key={index} style={{color: e.color}}>
        {(e.anchor) ? <a href={e.anchor}>{e.title}</a> : e.title}
      </li>
    )
}

export const Title = () => {
  return (
    <Section background='light'>
      <h1 className="title, h1-main">Frontend training</h1>
      <h2 class="subtitle">Summary</h2>

      <span>Overall training progress : 10 ok, 3 in progress on 15</span>
      <progress class="progress is-success" value="11.5" max="15" style={{width: "400px", border: "1px black solid"}}></progress>
      <ul>
        {generateSummaryTitles()}
      </ul>
    </Section>
  );
};
