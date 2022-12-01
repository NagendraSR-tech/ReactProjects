const url = 'http://localhost:4002'

export function latestNews() {
  const output = fetch(`${url}/articles?_end=3`, { method: 'GET' })
    .then(response => response.json())

  return {
    type: 'GET_LATEST',
    payload: output
  }
}

export function articleNews(response) {
  const output = fetch(`${url}/articles?_end=start===3&_end=10`, { method: 'GET' })
    .then((response) = response.json())

  return {
    type: 'GET_ARTICLES',
    payload: output
  }
}

export function selectedNews(id) {
  const output = fetch(`${url}/articles?id=${id}`, { method: 'GET' })
    .then(response => response.json(id))

  return {
    type: 'GET_SELECTED_NEWS',
    payload: output
  }
}

export function clearSelected() {

  return {
    type: 'CLEAR_SELECTED_NEWS',
    payload: []
  }
}