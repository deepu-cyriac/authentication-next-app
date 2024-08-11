#authentication-next-app

How authentication works?

- Login:
  . Verify user credentials & 'mark' user as authenticated

- Authorized access:
  . Grant authenticated user access to protected routes & resources.

- User(Client) -> sends credentials(email + password) -> Server -> server verifies credentials -> creates & stores user auth session -> Sends back cookie with session ID -> Client(browser) automatically stores session cookie

- User(Client) -> Sends request to protected route/resource ( Request contains session cookie - added automatically) -> Server -> Verifies session cookie validity in database -> If verified sends back the requested resourse else not auth error

- In this project, Lucia auth library is used to implement authentication
  . Also @lucia-auth/adapter-sqlite packages is used which enables lucia to store sessions in sqlite db

- Alternative is NextAuth.js
  . Unofficial
