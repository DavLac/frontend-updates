import axios from "axios";

export default axios.create({
    baseURL: "https://www.boredapi.com/api",
    headers: {
        'Content-type': 'application/json'
    }
});
