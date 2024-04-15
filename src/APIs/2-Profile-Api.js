import { API_BASE_URL, headersFn } from "./common"


export const fetchProfileInfo = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/current_info`, {
    method: 'GET',
    headers: headersFn(token)
  })

  return response.json()
}

export const updateProileData = async ({token, formData}) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/update`, {
    method: 'POST',
    headers: headersFn(token),
    body: formData
  })

  return response.json()
}

export const updateProfileImage = async ({token, formData}) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/ProfileImage`, {
    method: 'POST',
    headers: headersFn(token),
    body: formData
  })

  return response.json()
}

export const deleteAccount = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/Delete_account`, {
    method: 'POST',
    headers: headersFn(token),
  })

  return response.json()
}