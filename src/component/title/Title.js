import React from "react";
import {Section} from "../element/section/Section";

const summaryTitles = [
    {title: "ES6 features", anchor: "#es6-anchor", color: "green"},
    {
        title: "useState: react to a button",
        anchor: "#state-anchor",
        color: "green",
    },
    {
        title: "input event onChange, managing multiple states",
        anchor: "#inputevent-anchor",
        color: "green",
    },
    {
        title: "Cross component state - child to parent",
        anchor: "#cross-anchor",
        color: "green",
    },
    {
        title: "useEffect: execute at runtime",
        anchor: "#effect1-anchor",
        color: "green",
    },
    {
        title: "useEffect with dependency: login example - run code at runtime and on each keystroke",
        anchor: "#effect2-anchor",
        color: "green",
    },
    {
        title: "useReducer: login example - same than previous but with reducer",
        anchor: "#reducer-anchor",
        color: "green",
    },
    {
        title: "useEffect: load API call at runtime + update on click",
        anchor: "#effect3-anchor",
        color: "green",
    },
    {
        title: "useState, submit form, API call with placeholder, map response with a class",
        anchor: "#api-anchor",
        color: "green",
    },
    {
        title: "useReducer: manage big forms",
        anchor: "#form-anchor",
        color: "orange",
    },
    {title: "useContext", anchor: "#context-anchor", color: "green"},
    {title: "forwardRef", anchor: "#forward-anchor", color: "green"},
    {
        title: "React.memo: not call API if same param",
        anchor: "#reactmemo-anchor",
        color: "green",
    },
    {
        title: "React.memo with useCallback",
        anchor: "#usecallback-anchor",
        color: "green",
    },
    {
        title: "useMemo",
        anchor: "#usememo-anchor",
        color: "green",
    },
    {title: "Router + useHistory", anchor: "#router-anchor", color: "green"},
    {title: "Redux", anchor: "#redux-anchor", color: "orange"},
    {title: "Progressive image loading", color: "red",},
    {
        title: "Responsive CSS: media queries, flex and grid",
        anchor: "#responsive-anchor",
        color: "green",
    },
    {title: "Testing: Jest", color: "green"},
    {title: "Testing: Cypress", color: "green"},
];

const generateSummaryTitles = () => {
    return summaryTitles.map((e, index) => (
        <li key={index} style={{color: e.color}}>
            {e.anchor ? <a href={e.anchor}>{e.title}</a> : e.title}
        </li>
    ));
};

export const Title = () => {
    return (
        <Section background="light">
            <h1 className="title, h1-main">Frontend training</h1>
            <h2 className="subtitle">Summary</h2>
            <ul>{generateSummaryTitles()}</ul>
        </Section>
    );
};
