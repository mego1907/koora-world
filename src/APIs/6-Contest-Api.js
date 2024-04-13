import { API_BASE_URL, headersFn } from "./common"


export const fetchAllContestData = async () => {
  const response = await fetch(`${API_BASE_URL}/Client/Contest/GetAllContest`, {
    method: "GET",
    headers: headersFn()
  })

  if(!response.ok) {
    throw new Error(`Error fetching all contest data`)
  }

  return response.json()
} 

export const fetchContestDetails = async () => {
  const response = await fetch(`${API_BASE_URL}/Client/Contest/ContestDetails/${id}`, {
    method: "GET",
    headers: headersFn()
  })

  if(!response.ok) {
    throw new Error(`Error fetching contest details`)
  }

  return response.json()
}

export const predictTheContest = async (token, formData) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: headersFn(token),
    body: FormData
  })

  if(!response.ok) {
    throw new Error("Error in predictions")
  }

  return response.json()
}