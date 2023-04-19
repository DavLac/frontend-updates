import axios from "axios";

export default axios.create({
    baseURL: "https://api.genderize.io",
    headers: {
        "Content-type": "application/json"
    }
});
