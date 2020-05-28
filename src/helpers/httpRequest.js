export const getResource = async (url, token = null) => {
  // Make an HTTP Request to the API server
  const response = await fetch(url, {
    withCredentials: true,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

  // Convert to JSON format
  const result = await response.json();

  return result;
};

export const postResource = async (url, data, token = null) => {
  // Make HTTP Request to API server
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    withCredentials: true,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

  // Convert to JSON format
  const result = await response.json();

  return result;
};

export const patchResource = async (url, data, token = null) => {
  // Make HTTP Request to API server
  const response = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    withCredentials: true,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

  // Convert to JSON format
  const result = await response.json();

  return result;
};

export const deleteResource = async (url, token = null) => {
  // Make HTTP Request to API server
  const response = await fetch(url, {
    method: 'DELETE',
    withCredentials: true,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

  // Convert to JSON format
  const result = await response.json();

  return result;
};
