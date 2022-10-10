
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from "../../element/section/Section";

export const RouterSection = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
      navigate("/not-found-page");
  }

  return (
    <Section title="Router pages" background='light' description='Change page/route + handle Page not found'>
      <button type="button" onClick={onClickHandler}>
        Go to "Not found page"
      </button>
    </Section>
  );
};
