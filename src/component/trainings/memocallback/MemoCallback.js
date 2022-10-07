
import React from 'react';
import { Section } from "../../element/section/Section";
import FetchApi from './FetchApi';

export const MemoCallback = () => {
  console.log("Render MemoCallback");

  const onClickHandler = () => {
    console.log("onClickHandler");
  }

  return (
    <Section 
      title="React.memo, useCallBack and useMemo" 
      background='dark' 
      description='React.memo, useCallBack and useMemo'
    >
    <button type="button" onClick={onClickHandler}>Generate callback data</button>
    <br/>
    <FetchApi />
    </Section>
  );
};