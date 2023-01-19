import useForm from "../hook/useForm";
import login from "../api/login";
import { useNavigate } from "react-router-dom";
import { goToRegister } from "../Router/coordinate";

const Login = () => {

    const { form, onChange } = useForm({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault()
        const body = form
        login(body, navigate)
    }

    return (

        <>
            <h2>Login</h2>

            <form onSubmit={handleClick}>

                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={onChange} />

                <label htmlFor="password" type="password">Senha</label>
                <input id="password" name="password" value={form.password} type="password" onChange={onChange} required />

                <button type="submit">Login</button>
                <button onClick={() => goToRegister(navigate)}>Cadastrar-se</button>
            </form>

        </>

    );
}

export default Login;