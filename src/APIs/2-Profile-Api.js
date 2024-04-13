import { API_BASE_URL, headersFn } from "./common"


export const fetchProfileInfo = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/current_info`, {
    method: 'GET',
    headers: headersFn(token)
  })

  if(!response.ok) {
    throw new Error("Error fetching profile Info")
  }

  return response.json()
}

export const updateProileData = async (token, formData) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/update`, {
    method: 'POST',
    headers: headersFn(token),
    body: formData
  })

  if(!response.ok) {
    throw new Error("Error updating profile Info")
  }

  return response.json()
}

export const updateProfileImage = async (token, formData) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/ProfileImage`, {
    method: 'POST',
    headers: headersFn(token),
    body: formData
  })

  if(!response.ok) {
    throw new Error("Error updating profile Profile Image")
  }

  return response.json()
}

export const deleteAccount = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/Delete_account`, {
    method: 'POST',
    headers: headersFn(token),
  })

  if(!response.ok) {
    throw new Error("Error deleting profile Account")
  } 

  return response.json()
}