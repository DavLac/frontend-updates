
import React, { useState, useCallback, useMemo } from 'react';
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

export const MemoCallback = (props) => {
  console.log("Render MemoCallback");
  const [activity, setActivity] = useState();
  const [numbers, setNumbers] = useState(0);

  const onClickHandler = () => {
    setActivity('Loading...');
    getCallBackActivity()
      .then(res => setActivity(objectResponseToJsxList(res.data)))
      .catch(error => setActivity(JSON.stringify(error)));
  }

  const getCallBackActivity = useCallback(async () => {
    console.log("Loading data...");
    return await BoredApiGateway.getActivity();
  }, [BoredApiGateway.getActivity]);

  const memoized = useMemo(() => {
    setNumbers(numbers + 1);
    return numbers;
  }, []);

  const handleClick = () => {
    console.log('Clicked!', memoized);
  };

  return (
    <Section 
      title="React.memo, useCallBack and useMemo" 
      anchor="usememo-anchor"
      background={props.color}
      description='React.memo, useCallBack and useMemo'
    >
    <button type="button" onClick={handleClick}>Generate callback data</button>
    <br/>
    <div>Response : <br/>{(activity) ? <>{activity}</> : null}</div>
    </Section>
  );
};