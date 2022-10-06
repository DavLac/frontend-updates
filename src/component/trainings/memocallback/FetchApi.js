
import React, { useState, useEffect } from 'react';
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

const FetchApi = () => {
  const [updateActivity] = useState(0);
  const [activity, setActivity] = useState();

  useEffect(() => {
    console.log("Get data");
    setActivity('Loading...');
    BoredApiGateway.getActivity()
    .then(res => setActivity(objectResponseToJsxList(res.data)))
    .catch(error => setActivity(JSON.stringify(error)))
  }, [updateActivity]);

  return (
    <div>Response : <br/>{(activity) ? <>{activity}</> : null}</div>
  );
};

export default React.memo(FetchApi);