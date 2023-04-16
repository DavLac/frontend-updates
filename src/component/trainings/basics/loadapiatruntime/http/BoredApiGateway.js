import http from "./http-common";

const getActivity = () => {
    return http.get(`/activity`);
};

const endpoints = {
    getActivity
}

export default endpoints;
