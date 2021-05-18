import {React, useState} from 'react';

const formValues = {
    fname: '',
    lname: '',
    age: 0,
    title: '',
    Biography: '',
}
export default function Form({setMembers, members}) {
    const [inputValues, setInputValues] = useState(formValues)

    const change = (event) => {
        const { name, value } = event.target
        setInputValues({ ...inputValues, [name]: value })
    }

    const submit = (event) => {
        event.preventDefault()
        const newMember = {
            fname: inputValues.fname.trim(),
            lname: inputValues.lname.trim(),
            age: inputValues.age.trim(),
            title: inputValues.title,
            Biography: inputValues.Biography,
        }
        setMembers([...members, newMember])
        setInputValues(formValues)
    }


    return (
        <div>
            <form onSubmit={submit}>
                <label> First name 
                    <input type='text' name='fname' value={inputValues.fname} onChange={change}></input>
                </label>
                <label> Last name
                    <input type='text' name='lname' value={inputValues.lname} onChange={change}></input>
                </label>
                <label> Age
                    <input type='number' name='age' value={inputValues.age} onChange={change}></input>
                </label>
                <label> Title
                    <input type='text' name='title' value={inputValues.title} onChange={change}></input>
                </label>
                <label> Biography
                    <input type='text' name='Biography' value={inputValues.Biography} onChange={change}></input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}