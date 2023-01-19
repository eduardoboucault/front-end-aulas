import { useState } from "react";

const useForm = (initialValue) => {

    const [form, setForm] = useState(initialValue)

    const onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setForm({ ...form, [name]: value })
    }
    return { form, onChange }
}

export default useForm;