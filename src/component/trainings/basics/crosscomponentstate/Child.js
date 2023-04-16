
import React from 'react';
import { ChildOfChild } from './ChildOfChild';

export const Child = (props) => {
  return (
    <>
      <button type="button" onClick={props.onclickChild}>
        Child add button
      </button>
      <ChildOfChild onclickChild={props.onclickChild} />
    </>
  );
};
