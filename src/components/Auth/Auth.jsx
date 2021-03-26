import { useState } from 'react';
import './Auth.css';

function Auth(props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    props.submit(login, password);
  };

  return (
    <div className="auth-box">
      <h2 className="auth-box__title">{props.title}</h2>
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
        <button className="auth-form__btn-submit button" type="submit" onClick={submit}>
          {props.title}
        </button>
      </form>
    </div>
  );
}

export function SignIn() {
  const signIn = (login, password) => {
    console.log(login, password);
  };
  return <Auth title="Вход" submit={signIn} />;
}

export function SignUp() {
  const signUp = (login, password) => {
    console.log(login, password);
  };
  return <Auth title="Регистрация" submit={signUp} />;
}
