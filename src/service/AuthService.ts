import { AuthRoute } from '../routers/serverRouters';
import { post } from './requestTemplate';

class AuthService {
  login(username: string, password: string) {
    return post(
      AuthRoute.LOG_IN_URL,
      JSON.stringify({ username, password }),
    );
  }

  refreshToken(refresh: string) {
    return post(
      AuthRoute.REFRESH_TOKEN_URL,
      JSON.stringify({ refresh }),
    );
  }

  activateAccount(uid: string, token: string) {
    return post(
      AuthRoute.USER_ACTIVATE_URL,
      JSON.stringify({ uid, token }),
    );
  }

  signUp(username: string, email: string, password: string) {
    return post(
      AuthRoute.SIGN_UP_URL,
      JSON.stringify({ username, email, password }),
    );
  }

  resetPassword(email: string) {
    return post(
      AuthRoute.RESET_PASSWORD_URL,
      JSON.stringify({ email }),
    );
  }

  confirmPasswordReset(uid: string, token: string, newPassword: string, reNewPassword: string) {
    return post(
      AuthRoute.CONFIRM_RESET_PASSWORD_URL,
      JSON.stringify({
        uid,
        token,
        new_password: newPassword,
        re_new_password: reNewPassword,
      }),
    );
  }

  checkUsername(username: string) {
    return post(
      AuthRoute.CHECK_USERNAME_URL,
      JSON.stringify({ username }),
    );
  }

  checkEmail(email: string) {
    return post(
      AuthRoute.CHECK_EMAIL_URL,
      JSON.stringify({ email }),
    );
  }
}

const AUTH_SERVICE = new AuthService();

export default AUTH_SERVICE;
