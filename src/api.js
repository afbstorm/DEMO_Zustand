import axios from "axios";

export const fetchUserInfos = async () => {
    const data = {login: 'pseudo', password: 'password'}
    try {
        const response = await axios.post('http://localhost:3002/api/auth/login', data)

        if (response) {
            return response.data;
        }
    } catch (e) {
        console.error(e)
        throw e;
    }
}
