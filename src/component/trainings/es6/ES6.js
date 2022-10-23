import React, { useState } from "react";
import Script from "./Script";
import { Section } from "../../element/section/Section";

export const ES6 = (props) => {
  const [message, setMessage] = useState();

  const onclickHandler = () => {
    setMessage(
      <p>
        <i>ES6 script is being executed...</i>
        <progress
          class="progress is-info"
          max="100"
          style={{ maxWidth: "400px" }}
        >
          progress
        </progress>
      </p>
    );

    Script.runScript().then(() =>
      setMessage(
        <p style={{ color: "green" }}>
          <i>ES6 script is finished ! check console logs to see the output</i>
        </p>
      )
    );
  };

  return (
    <Section
      title="Javascript ES6 training"
      anchor="es6-anchor"
      background={props.color}
      description="Run script with ES6 features"
    >
      <button type="button" onClick={onclickHandler}>
        Run ES6 js script
      </button>
      {message}
    </Section>
  );
};
