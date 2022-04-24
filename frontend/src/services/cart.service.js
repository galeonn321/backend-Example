export const addCart = (body) => {
    const URL = `http://localhost:9000/api/cart`;
    return fetch({
        method: 'POST',
      url: `${URL}/`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
}

export const addItemToCart = (body) => {
    const URL = `http://localhost:9000/api/cart`;
    return fetch({
        method: 'POST',
      url: `${URL}/`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
}

