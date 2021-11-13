import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
});

export const RequestsAPI = {
    doPost(checkValue: boolean) {
        return instance.post('auth/test', {success: checkValue})
            .then(res => {
                console.log(res);
                return res;
            })
            .catch(err => {
                console.log({...err});
                console.log(err.response.data.errorText)
                console.log(err.response.data.info)
                return {...err.response}
            })
    }
}