import axios from "axios";

const request = axios.create({
    baseURL: 'https://applet-base-api-t.itheima.net/'
})

export default request