import { API_BASE_URL, headersFn } from "./common"


export const login = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: headersFn(),
    body: formData
  })


  return response.json();
}

export const register = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: headersFn(),
    body: formData
  })

  return response.json();
}

export const getUserInfo = async () => {
  const response = await fetch(`${API_BASE_URL}/Client/getinfo`, {
    method: 'GET',
    headers: headersFn()
  })

  if(!response.ok) {
    throw new Error("Couldn't get user info")
  }

  return response.json()
}

export const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: 'GET',
    headers: headersFn()
  })

  if(!response.ok) {
    throw new Error("Couldn't logout")
  }

  return response.json()
}