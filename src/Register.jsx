import React, { useState } from "react"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="bg-blue-50 h-screen flex  items-center">
      <form className="w-64 mx-auto mb-12">
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
        <button className="bg-blue-500 text-white block w-full p-2  rounded-sm">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
