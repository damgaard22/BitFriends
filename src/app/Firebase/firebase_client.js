import axios from "axios";

var firebase = axios.create({
    baseURL : 'https://bitfriends-caa35.firebaseio.com/',
    timeout : 1000
})

export default firebase