let headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const handleError = error => {
  //eslint-disable-next-line
  console.log('error', error);
  if (error.response) {
    const message =
      error.response && error.response.data && error.response.data.message;
    if (message) {
      // eslint-disable-next-line
      console.log('message', message);
    }
  } else if (error.request) {
    //eslint-disable-next-line
    console.log('error.request', 'Network error!');
  } else {
    //eslint-disable-next-line
    console.log('An unknown error has occurred!');
  }
};

// a request helper which reads the access_token from the redux state and passes it in its HTTP request
export function apiRequestGet(url, method = "GET") {
  const options = {
    method,
    headers
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({
      data
    }))
    .catch(error => {
        handleError(error);
        throw error
    });
}

export function apiRequestPost(url, body, method = "POST") {
  const options = {
    method,
    headers,
    body: JSON.stringify(body)
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({
      data
    }))
    .catch(error => {
        handleError(error);
        throw error
    });
}


export function apiRequestDelete(url, body, method = "DELETE") {
  const options = {
    method,
    headers,
    body: JSON.stringify(body)
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({
      data
    }))
    .catch(error => {
        handleError(error);
        throw error
    });
}

export function apiRequestPut(url, body, method = "PUT") {
  const options = {
    method,
    headers,
    body: JSON.stringify(body)
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({
      data
    }))
    .catch(error => {
        handleError(error);
        throw error
    });
}
