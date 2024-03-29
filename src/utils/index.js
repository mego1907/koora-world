

export const getItemFromLocalStorage = (key) => {
  if(typeof global?.window !== "undefined") {
    return JSON.parse(localStorage.getItem(key))
  } 
}

export const setItemInLocalStorage = (key, value) => {
  if(typeof global?.window !== "undefined") {
    localStorage.setItem(key, value)
  }
}

export const clearLocalStorage = () => {
  if(typeof global?.window !== "undefined") {
    localStorage.clear();
  }
}