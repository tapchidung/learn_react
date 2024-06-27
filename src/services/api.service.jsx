// import axios from "axios"
import axios from "./axios.customize.js"



const createUserAPI = (fullName, email, password, phone) => {
    const URL_Backend = '/api/v1/user';
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_Backend, data);
}
const updateUserAPI = () => {

}
const fetchALLUserAPI = () => {
    const URL_Backend = '/api/v1/user';
    return axios.get(URL_Backend);
}

export {
    createUserAPI, updateUserAPI, fetchALLUserAPI
}