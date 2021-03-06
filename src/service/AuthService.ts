import ROUTE from '../routers/routers';
import { ServerRoute } from '../routers/serverRouters';
import { post } from './requestTemplate';

class AuthService {
  private setTokensToLocalStorage(access: string, refresh: string) {
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
  }

  private removeTokensFromLocalStorage() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  }

  login(username: string, password: string) {
    return post(
      ServerRoute.LOG_IN_URL,
      JSON.stringify({ username, password }),
    )
      .then(response => response.json())
      .then(jsonResponse => {
        this.setTokensToLocalStorage(jsonResponse.access, jsonResponse.refresh);
        return jsonResponse;
      });
  }

  openPage(url: string) {
    window.location.href = window.location.origin + url;
  }

  refreshToken() {
    let refresh = localStorage.getItem('refresh');

    return post(
      ServerRoute.REFRESH_TOKEN_URL,
      JSON.stringify({ refresh }),
    )
      .then(response => response.json())
      .then(jsonResponse => {
        this.setTokensToLocalStorage(jsonResponse.access, jsonResponse.refresh);
        return jsonResponse;
      })
      .catch(() => {
        this.removeTokensFromLocalStorage();
        this.openPage(ROUTE.LOGIN);
      });
  }

  activateAccount(uid: string, token: string) {
    return post(
      ServerRoute.USER_ACTIVATE_URL,
      JSON.stringify({ uid, token }),
    );
  }

  signUp(username: string, email: string, password: string) {
    return post(
      ServerRoute.SIGN_UP_URL,
      JSON.stringify({ username, email, password }),
    );
  }

  resetPassword(email: string) {
    return post(
      ServerRoute.RESET_PASSWORD_URL,
      JSON.stringify({ email }),
    );
  }

  confirmPasswordReset(uid: string, token: string, newPassword: string, reNewPassword: string) {
    return post(
      ServerRoute.CONFIRM_RESET_PASSWORD_URL,
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
      ServerRoute.CHECK_USERNAME_URL,
      JSON.stringify({ username }),
    );
  }

  checkEmail(email: string) {
    return post(
      ServerRoute.CHECK_EMAIL_URL,
      JSON.stringify({ email }),
    );
  }

  logout() {
    this.removeTokensFromLocalStorage();
  }
}

const AUTH_SERVICE = new AuthService();

export default AUTH_SERVICE;
