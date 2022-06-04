import AUTH_SERVICE from './AuthService';
import { ClientError, ServerError } from './exception';


function transferErrorResponseToCustomErrors(promise: Promise<Response>) {
  return promise
    .then(async response => {
      if (response.status === 500) {
        throw new ServerError();
      }
      if (!response.ok) {
        throw new ClientError(await response.text(), response.status);
      }
      return response;
    });
}

export function post(url: string, body: string, headers: {[key: string]: string} = {}) {
  let request = fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
    body,
  });

  return transferErrorResponseToCustomErrors(request);
}


function getAuthorizationHeader(): {[key: string]: string} {
  return { Authorization: `Bearer ${localStorage.getItem('access')}` };
}

function handleUnathorizedResponse(originalMethod: () => Promise<Response>) {
  return originalMethod()
    .catch(error => {
      if (error.status === 401) {
        AUTH_SERVICE.refreshToken();
        return originalMethod();
      }
      throw error;
    });
}

export function authPost(url: string, body: string) {
  return handleUnathorizedResponse(() => post(url, body, getAuthorizationHeader()));
}

export function get(url: string, headers: {[key: string]: string} = {}) {
  let request = fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
  });

  return transferErrorResponseToCustomErrors(request);
}

export function authGet(url: string) {
  return handleUnathorizedResponse(() => get(url, getAuthorizationHeader()));
}

export function patch(url: string, body: string, headers: {[key: string]: string} = {}) {
  let request = fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
    body,
  });

  return transferErrorResponseToCustomErrors(request);
}

export function authPatch(url: string, body: string) {
  return handleUnathorizedResponse(() => patch(url, body, getAuthorizationHeader()));
}

export function deleteRequest(url: string, body: string, headers: {[key: string]: string} = {}) {
  let request = fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
    body,
  });

  return transferErrorResponseToCustomErrors(request);
}

export function authDeleteRequest(url: string, body: string) {
  return handleUnathorizedResponse(() => deleteRequest(url, body, getAuthorizationHeader()));
}
