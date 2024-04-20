import { API_BASE_URL, headersFn } from "./common";

export const fetchMatchesData = async (dateFrom, dateTo, page, leagueId, teamId) => {
  let response;

  if (dateFrom || dateTo) {
    response = await fetch(`${API_BASE_URL}/match?page${page}&date_from=${dateFrom}&date_to=${dateTo}`, {
      method: "GET",
      headers: headersFn(),
    })
  } else {
    response = await fetch(`${API_BASE_URL}/match?page${page}&league_id=${leagueId || ""}&team_id=${teamId || ""}`, {
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

  return response.json();
};

export const fetchTeamsData = async (countryId) => {
  const response = await fetch(`${API_BASE_URL}/match/Teams?country_id=${countryId}`, {
    method: "GET",
    headers: headersFn()
  })

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

export const fetechTeamsByCountry = async (id) => {
  const response = await fetch(`${API_BASE_URL}/match/Teams?country_id=${id}`, {
    method: "GET",
    headers: headersFn()
  })

  return response.json();
}