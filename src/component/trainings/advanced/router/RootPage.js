import {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export const RootPage = () => {
    const navigate = useNavigate();

    // run when component is mounting
    useEffect(() => {
        navigate("/trainings");
    });
}
