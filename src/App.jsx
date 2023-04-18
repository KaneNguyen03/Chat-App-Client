import axios from "axios"
import "./App.css"
import Routes from "./Routes"
import { UserContextProvider } from "./UserContext"
import { disableReactDevTools } from "@fvilers/disable-react-devtools"

if (process.env.NODE_ENV === "production") {
  disableReactDevTools()
}

function App() {
  axios.defaults.baseURL = "https://chat-app-api-uie4.onrender.com"
  axios.defaults.withCredentials = true
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
