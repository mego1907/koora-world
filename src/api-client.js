const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const headersFn = (token = false) => {
  if(token) {
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

export const fetchHomeData = async () => {
  const response = await fetch(`${API_BASE_URL}/Home/`);

  if(!response.ok) {
    throw new Error("Error fetching Home Data")
  }

  return response.json();
} 

export const fetchExpectationsData = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/Expectations/GetAllExpectations`, {
    method: "GET",
    headers: headersFn(token),
  });

  if (!response.ok) {
    throw new Error("Error fetching Expectations Data")
  }

  return response.json();
}

export const fetchSingleExpectationData = async (token, id) => {
  const response = await fetch(`${API_BASE_URL}/Client/Expectations/ExpectationsDetails/${id}`, {
    method: "GET",
    headers: headersFn(token),
  })

  if (!response.ok) {
    throw new Error("Error fetching Expectation Data")
  }

  return response.json();
}

export const fetchMatchesData = async () => {}

export const fetchCompetitionsData = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/Contest/GetAllContest`, {
    method: "GET",
    headers: headersFn(token)
  })

  if(!response.ok) {
    throw new Error("Error fetching Competitions Data")
  }

  return response.json()
}

export const fetchCompetitionDetails = async (token, id) => {
  const response = await fetch(`${API_BASE_URL}/Client/Contest/ContestDetails/${id}`, {
    method: "GET",
    headers: headersFn(token)
  })

  return response.json()
}

export const fetchNewsData = async () => {
  const formData = new FormData();
  formData.append("type", 1)

  const response = await fetch(`${API_BASE_URL}/Home/News`, {
    method: "POST",
    body: formData,
    headers: headersFn(),
  });

  if (!response.ok) {
    throw new Error("Error fetching News Data")
  }

  return response.json();
}

export const fetchSingleNew = async (newId) => {
  const formData = new FormData();
  formData.append("news_id", newId);

  const response = await fetch(`${API_BASE_URL}/Home/NewsDetails`, {
    method: "POST",
    body: formData,
    headers: headersFn(),
  })

  if(!response.ok) {
    throw new Error("Error fetching Single New")
  }

  return response.json();
}

export const fetchVideosData = async () => {
  const formData = new FormData();
  formData.append("type", 3)

  const response = await fetch(`${API_BASE_URL}/Home/News`, {
    method: "POST",
    body: formData,
    headers: headersFn(),
  });

  if (!response.ok) {
    throw new Error("Error fetching News Data")
  }

  return response.json();
}

export const fetchSingleVideoData = async (videoId) => {
  const formData = new FormData();
  formData.append("news_id", videoId);

  const response = await fetch(`${API_BASE_URL}/Home/NewsDetails`, {
    method: "POST",
    body: formData,
    headers: headersFn(),
  })

  if (!response.ok) {
    throw new Error("Error fetching Single New")
  }

  return response.json();
}

export const fetchImagesData = async (type) => {
  const formData = new FormData();
  formData.append("type", 2)

  const response = await fetch(`${API_BASE_URL}/Home/News`, {
    method: "POST",
    body: formData,
    headers: headersFn(),
  });

  if(!response.ok) {
    throw new Error("Error fetching News Data")
  }

  return response.json();
}

export const fetchSingleImageData = async (imageId) => {
  const formData = new FormData();
  formData.append("news_id", imageId);

  const response = await fetch(`${API_BASE_URL}/Home/NewsDetails`, {
    method: "POST",
    body: formData,
    headers: headersFn(),
  })

  if (!response.ok) {
    throw new Error("Error fetching Single New")
  }

  return response.json();
}

export const fetchProfileData = async (token) => {
  const response = await fetch(`${API_BASE_URL}/Client/profile/current_info`, {
    method: "GET",
    headers: headersFn(token)
  });

  if(!response.ok) {
    throw new Error("Error fetching Profile Data")
  }

  return response.json();
}   