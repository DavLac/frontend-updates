import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export const RootPage = () => {
    const navigate = useNavigate();

    // run after 1st rendering
    useEffect(() => {
        navigate("/trainings");
    });
}
