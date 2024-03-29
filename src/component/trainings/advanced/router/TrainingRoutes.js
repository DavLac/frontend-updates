import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound} from "./NotFound";
import {Title} from "../../../title/Title";
import {ES6} from "../../es6/ES6";
import {CrossComponentState} from "../../basics/crosscomponentstate/CrossComponentState";
import {LoadApiAtRuntime} from "../../basics/loadapiatruntime/LoadApiAtRuntime";
import {FormApiCall} from "../../basics/callapiwithparam/FormApiCall";
import {UseReducerForm} from "../../basics/usereducerform/UseReducerForm";
import {UseCallback} from "../callback/UseCallback";
import {RouterSection} from "./RouterSection";
import {Responsive} from "../../css/responsive/Responsive";
import {UseContext} from "../../basics/usecontext/UseContext";
import {ReduxBasic} from '../reduxbasic/ReduxBasic';
import {RootPage} from "./RootPage";
import {InputEvent} from "../../basics/inputevent/InputEvent";
import {UseEffectNoDependency} from "../../basics/useeffectnodependency/UseEffectNoDependency";
import {UseEffectWithDependency} from "../../basics/useeffectwithdependency/UseEffectWithDependency";
import {UseReducerLogin} from "../../basics/usereducerlogin/UseReducerLogin";
import {ForwardRef} from "../../basics/forwardref/ForwardRef";
import {Memo} from "../reactmemo/Memo";
import {UseMemo} from "../memo/UseMemo";
import {ErrorManagement} from "../errorboundary/ErrorManagement";
import {CallApiFetch} from "../../basics/callapifetch/CallApiFetch";
import {UseState} from "../../basics/usestate/UseState";
import {ReduxToolkitMultipleSlice} from "../reduxtoolkit/ReduxToolkitMultipleSlice";

const routeRoot = () =>
    <Route path={'/'} exact element={<RootPage/>}/>

const trainings = [
    <ES6/>,
    <UseState/>,
    <InputEvent/>,
    <CrossComponentState/>,
    <UseEffectNoDependency/>,
    <UseEffectWithDependency/>,
    <UseReducerLogin/>,
    <LoadApiAtRuntime/>,
    <FormApiCall/>,
    <UseReducerForm/>,
    <UseContext/>,
    <ForwardRef/>,
    <Memo/>,
    <UseCallback/>,
    <UseMemo/>,
    <ErrorManagement />,
    <CallApiFetch/>,
    <RouterSection/>,
    //<ReduxBasic/>,
    <ReduxToolkitMultipleSlice/>,
    <Responsive/>
]

const generateSections = () => {
    let sections = [];
    trainings.forEach((section, index) => {
        const clonedElementWithColor = addPropsToReactComponent(section,
            {color: (index % 2) ? "light" : "dark"}
        );
        sections.push(clonedElementWithColor);
    })
    return <>{sections}</>
}

const addPropsToReactComponent = (component, props) => {
    return React.cloneElement(
        component,
        props
    );
}

const routeMain = () =>
    <Route path={'/trainings'} exact element={
        <>
            <Title/>
            {generateSections()}
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
