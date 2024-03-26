

export const getItemFromLocalStorage = (key) => {
  if(typeof global?.window !== "undefined") {
    return JSON.parse(localStorage.getItem(key))
  } 
  
  return;
}

export const setItemInLocalStorage = (key, value) => {
  if(typeof global?.window !== "undefined") {
    localStorage.setItem(key, value)
  }

  return;
}

export const clearLocalStorage = () => {
  if(typeof global?.window !== "undefined") {
    localStorage.clear();
  }

  return;
}