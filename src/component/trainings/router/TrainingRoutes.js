import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from "./NotFound";
import { Title } from "../../title/Title";
import { ES6 } from "../es6/ES6";
import { UseState } from "../usestate/UseState";
import { CrossComponentState } from "../crosscomponentstate/CrossComponentState";
import { LoadApiAtRuntime } from "../loadapiatruntime/LoadApiAtRuntime";
import { FormApiCall } from "../callapiwithparam/FormApiCall";
import { UseReducerForm } from "../usereducer/UseReducerForm";
import { MemoCallback } from "../memocallback/MemoCallback";
import { RouterSection } from "../router/RouterSection";
import { Responsive } from "../responsive/Responsive";
import { UseContext } from "../usecontext/UseContext";
import { ReduxSection } from '../redux/ReduxSection';

const routeMain = () =>
    <Route path={'/trainings'} exact element={
        <>
            <Title />

            <ES6 color="dark"/>
            <UseState color="light" />
            <CrossComponentState color="dark"/>
            <LoadApiAtRuntime color="light" />
            <FormApiCall color="dark" />
            <UseReducerForm color="light" />
            <MemoCallback color="dark" />
            <RouterSection color="light" />
            <Responsive color="dark" />
            <UseContext color="light" />
            <ReduxSection color="dark" />
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
