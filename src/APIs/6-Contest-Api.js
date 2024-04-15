import { API_BASE_URL, headersFn } from "./common"


export const fetchAllContestData = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/Contest/GetAllContest`, {
    method: "GET",
    headers: headersFn(token)
  })

  return response.json()
} 

export const fetchContestDetails = async (token, id) => {
  const response = await fetch(`${API_BASE_URL}/Client/Contest/ContestDetails/${id}`, {
    method: "GET",
    headers: headersFn(token)
  })

  return response.json()
}

export const predictTheContest = async (token, formData) => {
  const response = await fetch(`${API_BASE_URL}/Client/Contest/predictions`, {
    method: "POST",
    headers: headersFn(token),
    body: formData
  })

  return response.json()
}