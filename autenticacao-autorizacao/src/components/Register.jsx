import { useNavigate } from "react-router-dom";
import signup from "../api/signup";
import useForm from "../hook/useForm";
import { goToLogin } from "../Router/coordinate";

const Register = () => {

    const { form, onChange } = useForm({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault()
        const body = form
        signup(body, navigate)
    }

    return (

        <>
            <h2>Página registro</h2>

            <form onSubmit={handleClick}>

                <label htmlFor="name">Nome:</label>
                <input id="name" name="name" value={form.name} onChange={onChange} />

                <label htmlFor="email">Email:</label>
                <input id="email" name="email" value={form.email} onChange={onChange} required />

                <label htmlFor="password" type="email">Senha:</label>
                <input id="password" name="password" value={form.password} type="password" onChange={onChange} required />

                <button type="submit">Enviar</button>
                <button onClick={() => goToLogin(navigate)}>Voltar</button>
            </form>
        </>

    );
}

export default Register;