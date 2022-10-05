import { useState } from "react"
import { useAppDispatch } from "../../../shared/store"

import Input from "../../design/atoms/input"
import {login}  from "./auth.reducer"

const Login = () => {
    const dispatch = useAppDispatch()
    const [email, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const data = { email, password }
        dispatch(login(data))
    }
    
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label className="mb-1 text-white">Email or Username</label>
                    <Input pholder="Email or Username" name="entry" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailOrUsername(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label className="mb-1 text-white">Password</label>
                    <Input type="password" name="password" pholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}  />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn bg-white text-primary btn-block">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
