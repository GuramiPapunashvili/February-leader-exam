import { useState } from "react";

const Register = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || []
        if(users.find((v) => v.username == username)){
            alert('this account exists')
            return;
        }

        const newUser = {username,password}
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        alert('registered')
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="enter email nigga" required/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="now enter password nigga"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;