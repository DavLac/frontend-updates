import React from 'react';
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/trainings");
    }

    return (
        <>
            <h1>
                Page not found
            </h1>
            <button type="button" onClick={onClickHandler}>Go to trainings</button>
        </>
    );
        
}
