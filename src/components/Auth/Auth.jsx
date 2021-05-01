import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Auth.css';

function Auth(props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const submit = (e) => {
    e.preventDefault();
    const validationErrors = validate(login, password);
    if (Object.entries(validationErrors).length === 0) {
      setErrors({});
      props.submit(login, password);
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (login, password) => {
    const validationErrors = {};
    if (
      !login ||
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        login
      )
    ) {
      validationErrors.login = 'Не валидный e-mail';
    }
    if (!password || !/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/.test(password)) {
      validationErrors.password =
        'Пароль должен содержать не менее восьми знаков, включать заглавные и строчные буквы, цифры';
    }
    return validationErrors;
  };

  return (
    <div className="auth-box">
      <h2 className="auth-box__title">{props.type === 'signin' ? 'Вход' : 'Регистрация'}</h2>
      <form className="auth-form">
        <label className="auth-form__lable" htmlFor="email">
          Эл. почта:
        </label>
        <input
          className="auth-form__input input"
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          placeholder="E-mail"
          value={login}
          id="email"
        />
        {errors.login ? <p className="auth-form__error-description">{errors.login}</p> : ''}
        <label className="auth-form__lable" htmlFor="pass">
          Пароль:
        </label>
        <input
          className="auth-form__input input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
          id="pass"
        />
        {errors.password ? <p className="auth-form__error-description">{errors.password}</p> : ''}
        <button className="auth-form__btn-submit button" type="submit" onClick={submit}>
          {props.type === 'signin' ? 'Войти' : 'Зарегистироваться'}
        </button>
      </form>
      {props.type === 'signin' ? (
        <span className="auth-box__question">
          {'Еще нет аккаунта? '}
          <Link className="auth-box__question-link" to="/signup">
            Зарегистрироваться
          </Link>
        </span>
      ) : (
        <span className="auth-box__question">
          {'Уже есть аккаунт? '}
          <Link className="auth-box__question-link" to="/signin">
            Войти
          </Link>
        </span>
      )}
    </div>
  );
}

export function SignIn() {
  const auth = useAuth();
  return <Auth type="signin" submit={auth.signIn} />;
}

export function SignUp() {
  const auth = useAuth();
  return <Auth type="signup" submit={auth.signUp} />;
}
