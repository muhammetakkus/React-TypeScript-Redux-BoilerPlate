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
        <div className="authincation h-100">
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="authincation-content mt-5">
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <div className="auth-form">
                                        <div className="text-center mb-3">
                                            <img src="/src/assets/images/tedisyon long.png" alt="" width={"300px"} />
                                        </div>
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
                                                <button type="submit" className="btn bg-white text-primary btn-block">Giriş</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
