import axios from "axios"
import { goToFeed } from "../Router/coordinate"
import { baseUrl } from "../variables/baseUrl"

const signup = (body, navigate) => {

    const url = `${baseUrl}/user/signup`
    axios
        .post(url, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            alert(res.data.message)
            goToFeed(navigate)
        })
        .catch(err => console.log(err))

}

export default signup;