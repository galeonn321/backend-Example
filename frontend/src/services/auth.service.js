export const signIn = (body) => {
    const URL = `http://localhost:9000/api/auth`;
    return fetch({
      method: 'POST',
      url: `${URL}/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
}
