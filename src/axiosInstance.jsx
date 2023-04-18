import React from "react"

export const axiosInstance = () => {
  const apiInstance = axios.create({
    headers: ["Content-Type"],
    baseURL: "https://chat-app-api-uie4.onrender.com",
  })
}
