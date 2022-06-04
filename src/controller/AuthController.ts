import { setErrorText } from '../registration/form/login/loginSlice';
import { setEmailErrorText, setPasswordErrorText, setUsernameErrorText } from '../registration/form/signUp/signUpSlice';
import AUTH_SERVICE from '../service/AuthService';
import { CustomError } from '../service/exception';
import { store } from '../store/store';


type ErrorArray = Array<string> | undefined;

class AuthController {
  login(username: string, password: string) {
    return AUTH_SERVICE.login(username, password)
      .then(response => {
        store.dispatch(setErrorText(null));
        return response;
      })
      .catch((error) => {
        let customError = error as CustomError;

        if (customError.status === 401) {
          store.dispatch(setErrorText('Username or password incorrect'));
        }
        throw error;
      });
  }

  private setSignUpErrors(
    usernameErrors: ErrorArray,
    passwordErrors: ErrorArray,
    emailErrors: ErrorArray,
  ) {
    store.dispatch(setUsernameErrorText(
      (usernameErrors === undefined) ? null : usernameErrors[0],
    ));
    store.dispatch(setPasswordErrorText(
      (passwordErrors === undefined) ? null : passwordErrors[0],
    ));
    store.dispatch(setEmailErrorText(
      (emailErrors === undefined) ? null : emailErrors[0],
    ));
  }

  signUp(username: string, email: string, password: string) {
    return AUTH_SERVICE.signUp(username, email, password)
      .then(response => {
        this.setSignUpErrors(undefined, undefined, undefined);
        return response;
      })
      .catch(error => {
        let errorObject = JSON.parse(error.message);
        this.setSignUpErrors(errorObject.username, errorObject.password, errorObject.email);
        throw error;
      });
  }

  activateAccount(uid: string, token: string) {
    AUTH_SERVICE.activateAccount(uid, token);
  }

  checkUsername(username: string) {
    AUTH_SERVICE.checkUsername(username)
      .then(() => store.dispatch(setUsernameErrorText(null)))
      .catch(error => {
        store.dispatch(setUsernameErrorText(error.message));
        throw error;
      });
  }

  checkEmail(email: string) {
    AUTH_SERVICE.checkEmail(email)
      .then(() => store.dispatch(setEmailErrorText(null)))
      .catch(error => {
        store.dispatch(setEmailErrorText(error.message));
        throw error;
      });
  }
}

const AUTH_CONTROLLER = new AuthController();

export default AUTH_CONTROLLER;
