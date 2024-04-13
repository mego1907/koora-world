import { API_BASE_URL, headersFn } from "./common";

export const fetchMatchesData = async (dateFrom, dateTo) => {
  let response;

  if (dateFrom || dateTo) {
    response = await fetch(`${API_BASE_URL}/match?date_from=${dateFrom}&date_to=${dateTo}`, {
      method: "GET",
      headers: headersFn(),
    })
  } else {
    response = await fetch(`${API_BASE_URL}/match`, {
      method: "GET",
      headers: headersFn(),
    })
  }
  
  return response.json();
}

export const fetchMatchDetails = async (matchId) => {
  const response = await fetch(`${API_BASE_URL}/match/MatchesDetails/${matchId}`, {
    method: "GET",
    headers: headersFn()
  })
  
  return response.json();
};

export const fetchLeagueData = async () => {
  const response = await fetch(`${API_BASE_URL}/match/league`, {
    method: "GET",
    headers: headersFn()
  })

  if(!response.ok) {
    throw new Error("Error fetching League Data")
  }

  return response.json();
};

export const fetchCountryData = async () => {
  const response = await fetch(`${API_BASE_URL}/match/Country`, {
    method: "GET",
    headers: headersFn()
  })

  if(!response.ok) {
    throw new Error("Error fetching Country Data")
  }

  return response.json();
};

export const ftechTeamsByCountry = async (id) => {
  const response = await fetch(`${API_BASE_URL}/match/Teams?country_id=${id}`, {
    method: "GET",
    headers: headersFn()
  })

  if(!response.ok) {
    throw new Error("Error fetching Teams by Country")
  }

  return response.json();
}