import React, {useState} from 'react';
import {Section} from "../../../element/section/Section";
import ErrorBoundary from "./ErrorBoundary";

export const ErrorManagement = (props) => {
    const [status, setStatus] = useState("OK");

    const onClickHandler = () => {
        throw new Error("my custom error");
    }

    const onClickHandlerReset = () => {
        setStatus("OK");
    }

    return (
        <Section
            title="Error boundary"
            anchor="error-anchor"
            background={props.color}
            description='Error boundary: manage React errors'
        >
            <ErrorBoundary>
                <button type={"button"} onClick={onClickHandler}>Throw error</button>
                <button type={"button"} onClick={onClickHandlerReset}>Reset</button>
                <p>Status: {status} (check logs)</p>
            </ErrorBoundary>
        </Section>
    );
};