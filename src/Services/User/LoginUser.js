import Axios from 'axios';
class LoginUser {
    Login(data) {
        return Axios({
            method:'POST',
            url:'http://localhost:3000/api/v1/users/login',
            data
        })
    }
}

export default LoginUser;