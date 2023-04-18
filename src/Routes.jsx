import React, { useContext } from "react"
import Chat from "./Chat"
import Register from "./RegisterAndLoginForm"
import { UserContext } from "./UserContext"

const Routes = () => {
  const { username } = useContext(UserContext)
  if (username) {
    return <Chat/>
  }

  return <Register />
}

export default Routes
