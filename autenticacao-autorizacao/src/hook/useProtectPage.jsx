import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../Router/coordinate";

const useProtectPage = () => {
    const navigate = useNavigate()

    useEffect(()=> {
        const token = localStorage.getItem("token")
        if(token === null){
            goToLogin(navigate)
        }
    },[navigate])
}

export default useProtectPage;