import React, { useContext } from "react"
import Register from "./RegisterAndLoginForm"
import { UserContext } from "./UserContext"

const Routes = () => {
  const { username } = useContext(UserContext)
  if (username) {
    return "logged in" + username
  }

  return <Register />
}

export default Routes
