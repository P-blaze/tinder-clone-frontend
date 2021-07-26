import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-backend-nector.herokuapp.com/"
})

export default instance;