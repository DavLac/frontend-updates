import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound} from "./NotFound";
import {Title} from "../../../title/Title";
import {ES6} from "../../es6/ES6";
import {UseState} from "../../basics/usestate/UseState";
import {CrossComponentState} from "../../basics/crosscomponentstate/CrossComponentState";
import {LoadApiAtRuntime} from "../../basics/loadapiatruntime/LoadApiAtRuntime";
import {FormApiCall} from "../../basics/callapiwithparam/FormApiCall";
import {UseReducerForm} from "../../basics/usereducer/UseReducerForm";
import {MemoCallback} from "../memocallback/MemoCallback";
import {RouterSection} from "./RouterSection";
import {Responsive} from "../../css/responsive/Responsive";
import {UseContext} from "../../basics/usecontext/UseContext";
import {ReduxSection} from '../redux/ReduxSection';
import {RootPage} from "./RootPage";
import {InputEvent} from "../../basics/inputevent/InputEvent";
import {UseEffectNoDependency} from "../../basics/useeffectnodependency/UseEffectNoDependency";

const routeRoot = () =>
    <Route path={'/'} exact element={<RootPage/>}/>

const routeMain = () =>
    <Route path={'/trainings'} exact element={
        <>
            <Title/>

            <ES6 color="dark"/>
            <UseState color="light"/>
            <InputEvent color="dark"/>
            <CrossComponentState color="light"/>
            <UseEffectNoDependency color="dark"/>
            <LoadApiAtRuntime color="light"/>
            <FormApiCall color="dark"/>
            <UseReducerForm color="light"/>
            <MemoCallback color="dark"/>
            <RouterSection color="light"/>
            <Responsive color="dark"/>
            <UseContext color="light"/>
            <ReduxSection color="dark"/>
        </>
    }/>

const routeNotFound = () => <Route path={'*'} element={<NotFound/>}/>

export default function TrainingRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {routeRoot()}
                {routeMain()}
                {routeNotFound()}
            </Routes>
        </BrowserRouter>
    );
}
