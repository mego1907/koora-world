import { API_BASE_URL, headersFn } from "./common";

export const fetchAllExpectationsData = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/Expectations/GetAllExpectations`, {
    method: "GET",
    headers: headersFn(token),
  });

  if (!response.ok) {
    throw new Error("Error fetching Expectations Data")
  }

  return response.json();
}

export const fetchExpectationDetails = async (token, id) => {
  const response = await fetch(`${API_BASE_URL}/Client/Expectations/ExpectationsDetails/${id}`, {
    method: "GET",
    headers: headersFn(token),
  })

  if (!response.ok) {
    throw new Error("Error fetching Expectation Data")
  }

  return response.json();
}

export const predictTheExpectation = async (token, formData) => {
  const response = await fetch(`${API_BASE_URL}/Client/Expectations/predictions`, {
    method: "POST",
    headers: headersFn(token),
    body: formData
  })

  if(!response.ok) {
    throw new Error("Error in predictions")
  }

  return response.json()
}