import axios from "axios"
import "./App.css"
import Routes from "./Routes"
import { UserContextProvider } from "./UserContext"

function App() {
  axios.defaults.baseURL = "https://chat-app-m9zj.onrender.com"
  axios.defaults.withCredentials = true
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
