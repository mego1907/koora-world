import { API_BASE_URL, headersFn } from "./common"


export const fetchAllPackages = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/package/GetAllPackage`, {
    method: "GET",
    headers: headersFn(token)
  })

  return response.json()
} 

export const subscribeToThePackage = async ({ token, formData }) => {
  const response = await fetch(`${API_BASE_URL}/Client/package/Subscription`, {
    method: "POST",
    headers: headersFn(token),
    body: formData
  })

  return response.json()
}