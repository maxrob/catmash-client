export const getCatsMashes = (limit: number) => {
  return `${process.env.REACT_APP_API_URL}/cats/mashes?limit=${limit}`
}

export const getCats = () => {
  return `${process.env.REACT_APP_API_URL}/cats`
}

export const addCatPoint = (id: string) => {
  return `${process.env.REACT_APP_API_URL}/cats/${id}/add_point`
}
