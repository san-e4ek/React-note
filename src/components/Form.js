import React, {useState, useContext} from 'react'
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/FirebaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const fireBase = useContext(FirebaseContext)

    const submitHandler = e => {
        e.preventDefault()

        if (value.trim()) {
            fireBase.addNote(value.trim())
                .then(() => {
                    alert.show('Заметка была создана', 'success')
                })
                .catch(() => {
                    alert.show('Что-то пошло не так', 'danger')
                })
            setValue('')
        } else {
            alert.show('Введите название заметки')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={"form-group"}>
                <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    type="text"
                    className={"form-control"}
                    placeholder={"Введите название заметки"}/>
            </div>
        </form>
    )
}