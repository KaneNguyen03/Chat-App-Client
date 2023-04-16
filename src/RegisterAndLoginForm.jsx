import axios from "axios"
import React, { useContext, useState } from "react"
import { UserContext } from "./UserContext"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register")
  const { setUsername: setLoggedUsername, setId } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = isLoginOrRegister === 'register' ? 'register' : 'login'
    const { data } = await axios.post(url, { username, password })
    setLoggedUsername(username)
    setId(data.id)
  }

  return (
    <div className="bg-blue-50 h-screen flex  items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="username"
          className="block w-full p-2 rounded-sm mb-2 border"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          className="block w-full p-2 rounded-sm mb-2 border"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          {isLoginOrRegister === "register" ? "register" : "login"}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === "register" && (
            <div>
              Already a member?{" "}
              <button className="ml-1" onClick={() => setIsLoginOrRegister("login")}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              Don't have an account?
              <button className="ml-1" onClick={() => setIsLoginOrRegister("register")}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default Register
