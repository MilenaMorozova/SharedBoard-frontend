export const SERVER_URL = 'http://26.124.121.68/api';
const MAIN_AUTH_URL = `${SERVER_URL}/auth`;
const MAIN_BOARD_URL = `${SERVER_URL}/board`;

export const ServerRoute = {
  LOG_IN_URL: `${MAIN_AUTH_URL}/jwt/create/`,
  REFRESH_TOKEN_URL: `${MAIN_AUTH_URL}/jwt/refresh/`,

  USER_ACTIVATE_URL: `${MAIN_AUTH_URL}/users/activation/`,
  SIGN_UP_URL: `${MAIN_AUTH_URL}/users/`,
  RESET_PASSWORD_URL: `${MAIN_AUTH_URL}/users/reset_password/`,
  CONFIRM_RESET_PASSWORD_URL: `${MAIN_AUTH_URL}/users/reset_password_confirm/`,

  CHECK_USERNAME_URL: `${MAIN_AUTH_URL}/check_username/`,
  CHECK_EMAIL_URL: `${MAIN_AUTH_URL}/check_email/`,

  GET_USER_URL: `${MAIN_AUTH_URL}/users/me/`,
  CHANGE_PASSWOD_URL: `${MAIN_AUTH_URL}/users/set_password/`,
  CHANGE_USERNAME_URL: `${MAIN_AUTH_URL}/users/set_username/`,
  CHANGE_EMAIL_URL: `${MAIN_AUTH_URL}/users/set_email/`,

  GET_MY_BOARDS_URL: `${MAIN_BOARD_URL}/my`,
  CREATE_FILE_URL: `${MAIN_BOARD_URL}/create_board/`,
  DELETE_FILE_URL: `${MAIN_BOARD_URL}/delete_board/`,
  LEAVE_FILE_URL: `${MAIN_BOARD_URL}/leave_board/`,
  OPEN_FILE_URL: `${MAIN_BOARD_URL}/open_board/`,
};
