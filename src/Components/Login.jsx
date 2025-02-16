import { useState } from "react";

const Login = ({setUser,setAuth}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || []
        const foundUser = users.find((v) => v.username == username && v.password == password)
        if (foundUser){
            setUser(foundUser)
            setAuth(true)
            localStorage.setItem('user', JSON.stringify(foundUser))
        } else {
            alert('wrong user or pass bro')
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="enter user" required/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your pass" required/>
                <button type="Submit">Login</button>
            </form>
        </div>
    )
}

export default Login;