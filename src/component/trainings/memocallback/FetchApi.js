
import React, { useState, useEffect, useCallback } from 'react';
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

const FetchApi = (props) => {
  const [activity, setActivity] = useState();

  const getCallBackActivity = useCallback(async () => {
    setActivity('Loading...');
    console.log("Loading data...");
    return await BoredApiGateway.getActivity();
  }, [activity]);

  useEffect(() => getCallBackActivity()
      .then(res => setActivity(objectResponseToJsxList(res.data)))
      .catch(error => setActivity(JSON.stringify(error))), 
      [getCallBackActivity]);

  return (
    <div>Response {props.click} : <br/>{(activity) ? <>{activity}</> : null}</div>
  );
};

export default FetchApi;