export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const headersFn = (token = false) => {
  if (token) {
    return {
      "Authorization": "Bearer " + token,
      "Accept": "*/*",
      "Access-Control-Allow-Origin": "*",
      "currency": "kwd",
      "Accept": "application/json"
    }
  }

  return {
    "Accept": "*/*",
    "Access-Control-Allow-Origin": "*",
    "currency": "kwd",
    "Accept": "application/json"
  }
}