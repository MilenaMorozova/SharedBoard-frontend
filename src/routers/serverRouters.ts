export const SERVER_URL = 'http://26.124.121.68/api';
const MAIN_AUTH_URL = `${SERVER_URL}/auth`;

export const AuthRoute = {
  LOG_IN_URL: `${MAIN_AUTH_URL}/jwt/create/`,
  REFRESH_TOKEN_URL: `${MAIN_AUTH_URL}/jwt/refresh/`,

  USER_ACTIVATE_URL: `${MAIN_AUTH_URL}/users/activation/`,
  SIGN_UP_URL: `${MAIN_AUTH_URL}/users/`,
  RESET_PASSWORD_URL: `${MAIN_AUTH_URL}/users/reset_password/`,
  CONFIRM_RESET_PASSWORD_URL: `${MAIN_AUTH_URL}/users/reset_password_confirm/`,

  CHECK_USERNAME_URL: `${MAIN_AUTH_URL}/check_username/`,
  CHECK_EMAIL_URL: `${MAIN_AUTH_URL}/check_email/`,
};
