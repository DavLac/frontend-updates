import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from "./NotFound";
import { Title } from "../../title/Title";
import { UseState } from "../usestate/UseState";
import { LoadApiAtRuntime } from "../loadapiatruntime/LoadApiAtRuntime";
import { FormApiCall } from "../callapiwithparam/FormApiCall";
import { UseReducerForm } from "../usereducer/UseReducerForm";
import { MemoCallback } from "../memocallback/MemoCallback";

const routeMain = () =>
    <Route path={'/trainings'} exact  element={
        <>
            <Title />
            <UseState />
            <LoadApiAtRuntime />
            <FormApiCall />
            <UseReducerForm />
            <MemoCallback />
        </>
    } />

const routeNotFound = () => <Route path={'*'} element={<NotFound/>} />

export default function TrainingRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {routeMain()}
                {routeNotFound()}
            </Routes>
        </BrowserRouter>
    );
}
