
import React, {useContext} from 'react';
import UserContext from './UserContext';

export const Child1 = () => {
  const ctxNumber = useContext(UserContext);

  return (
  <>
    <h5>Child1 component</h5>
    <ul>
      <li>Number 1 = {ctxNumber.ctxIncrement}</li>
      <li>Number 2 = {ctxNumber.ctxIncrement2}</li>
    </ul>
  </>
  );
};
