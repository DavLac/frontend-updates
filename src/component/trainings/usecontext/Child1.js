
import React, {useContext} from 'react';
import UserContext from './UserContext';

export const Child1 = () => {
  const ctxNumber1 = useContext(UserContext);

  return (
  <>
    <h5>Child1 component</h5>
    <ul>
      <li>Number 1 = {ctxNumber1.ctxIncrement}</li>
      <li>Number 2 = {ctxNumber1.ctxIncrement2}</li>
    </ul>
  </>
  );
};
