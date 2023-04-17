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
import {UseEffectWithDependency} from "../../basics/useeffectwithdependency/UseEffectWithDependency";
import {UseReducerLogin} from "../../basics/usereducerlogin/UseReducerLogin";

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
            <UseEffectWithDependency color="light"/>
            <UseReducerLogin color="dark"/>
            <LoadApiAtRuntime color="dark"/>
            <FormApiCall color="light"/>
            <UseReducerForm color="dark"/>
            <MemoCallback color="light"/>
            <RouterSection color="dark"/>
            <Responsive color="light"/>
            <UseContext color="dark"/>
            <ReduxSection color="light"/>
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
