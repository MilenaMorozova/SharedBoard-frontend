import { ClientError, ServerError } from './exception';


export function post(url: string, body: string) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body,
  })
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
