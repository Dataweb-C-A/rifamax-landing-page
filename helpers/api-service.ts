const apiBaseUrl: any = process.env.NODE_ENV === 'production'
  ? process.env.API_URL
  : 'http://localhost:3000'

export const findUser = (token: string) => {
  fetch(`${apiBaseUrl}/api/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}
