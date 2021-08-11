import { useState } from 'react';
import { Select, Option } from './components/CustomSelect/CustomSelect';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Wordlist from './components/Wordlist/Wordlist';
import WordCard from './components/WordCard/WordCard';
import Search from './components/Search/Search';
import { SignUp, SignIn } from './components/Auth/Auth';
import { useAuth, ProvideAuth } from './hooks/useAuth';
import { ReactComponent as DeleteSVG } from './assets/delete.svg';
import './App.css';

function App() {
  const [definitionWord, setDefinitionWord] = useState(null);

  const words = [
    { id: 1, en: 'English', translate: 'Английский' },
    { id: 2, en: 'English', translate: 'Английский' },
    { id: 3, en: 'English', translate: 'Английский' },
    { id: 4, en: 'English', translate: 'Английский' },
  ];

  return (
    <ProvideAuth>
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <h1 className="header__title">English Dictionary</h1>
          </header>
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <PrivateRoute path="/">
              <Search setDefinitionToState={(definition) => setDefinitionWord(definition)} />
              <div className="container">
                {definitionWord ? <WordCard word={definitionWord} close={() => setDefinitionWord(null)} /> : null}
                <div className="menu">
                  <div className="menu__filter">
                    <div className="menu__select-container">
                      <Select>
                        <Option value="1">Значение 1</Option>
                        <Option value="2">Значение 2</Option>
                        <Option value="3" selected>
                          Значение 3
                        </Option>
                        <Option value="4">Значение 4</Option>
                        <Option value="5">Значение 5</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="menu__control">
                    <div className="menu__select-container">
                      <Select>
                        <Option value="1">Добавить в 1</Option>
                        <Option value="2">Добавить в 2</Option>
                        <Option value="3">Добавить в 3</Option>
                        <Option value="4">Добавить в 4</Option>
                        <Option value="5">Добавить в 5</Option>
                      </Select>
                    </div>
                    <div className="menu__remove">
                      <div className="icon">
                        <span className="icon__delete">
                          <DeleteSVG />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Wordlist words={words} />
              </div>
            </PrivateRoute>
          </Switch>
        </div>
      </BrowserRouter>
    </ProvideAuth>
  );
}

function PrivateRoute({ children, ...rest }) {
  const { user, isAuthenticating } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticating ? (
          <div>loading</div>
        ) : user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: location } }} />
        )
      }
    />
  );
}

export default App;
