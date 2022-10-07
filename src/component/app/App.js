
import "../../sass/main.scss";
import React from 'react';
import { Title } from "../title/Title";
import { UseState } from "../trainings/usestate/UseState";
import { LoadApiAtRuntime } from "../trainings/loadapiatruntime/LoadApiAtRuntime";
import { FormApiCall } from "../trainings/callapiwithparam/FormApiCall";
import { UseReducerForm } from "../trainings/usereducer/UseReducerForm";
import { MemoCallback } from "../trainings/memocallback/MemoCallback";

const App = () => {
  return (
      <>
        <Title />
        <UseState />
        <LoadApiAtRuntime />
        <FormApiCall />
        <UseReducerForm />
        <MemoCallback />
      </>
  );
};

export default App;