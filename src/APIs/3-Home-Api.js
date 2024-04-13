import { API_BASE_URL, headersFn } from "./common";

export const fetchHomeData = async () => {
  const response = await fetch(`${API_BASE_URL}/Home/`);

  if (!response.ok) {
    throw new Error("Error fetching Home Data")
  }

  return response.json();
} 

export const fetchNewsOrImagesOrVideoData = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/Home/News`, {
    method: "POST",
    headers: headersFn(),
    body: formData
  });

  if(!response.ok) {
    throw new Error("Error fetching News or Images or Video data")
  }

  return response.json();
}

export const fetchNewOrImageOrVideoDetails = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/Home/NewsDetails`, {
    method: "POST",
    headers: headersFn(),
    body: formData
  })

  if(!response.ok) {
    throw new Error("Error fetching News or Images or Video Details")
  }

  return response.json();
}

export const postComment = async (token, fromData) => {
  const response = await fetch(`${API_BASE_URL}/Client/PostComments`, {
    method: "POST",
    headers: headersFn(token),
    body: fromData
  })

  if(!response.ok) {
    throw new Error("Error post comment")
  }

  return response.json()
}

export const fetchAllComments = async (formData, postId) => {
  const response = await fetch(`${API_BASE_URL}/Home/Comments/${postId}`, {
    method: "GET",
    headers: headersFn(),
    body: formData
  })

  if(!response.ok) {
    throw new Error("Error fetching comments")
  }

  return response.json()
}