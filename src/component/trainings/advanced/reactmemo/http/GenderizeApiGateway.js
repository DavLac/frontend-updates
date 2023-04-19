import http from "./http-common";

const getGenderByName = name => {
    return http.get(`/?name=${name}`);
};

export default {
    getGenderByName
};
