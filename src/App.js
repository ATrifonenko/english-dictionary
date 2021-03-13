import { Select, Option } from './components/CustomSelect/CustomSelect';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">English Dictionary</h1>
      </header>
      <div className="search">
        <input type="text" className="search__input" placeholder="Найти слово" />
        <button className="search__btn">Найти</button>
      </div>

      <div className="container">
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
              <div className="word-remove">DEL</div>
            </div>
          </div>
        </div>
        <div className="words-list">
          <div className="words-list_row">
            <div className="words-list__checkbox">
              <input className="words-list__checkbox-input" type="checkbox" />
            </div>
            <div className="words-list__word">
              <strong className="words-list__en-word">English</strong>
              <span className="words-list__sign">—</span>
              <span className="words-list__translate">Английский</span>
            </div>
            <div className="words-list__word-remove">DEL</div>
          </div>
          <div className="words-list_row">
            <div className="words-list__checkbox">
              <input className="words-list__checkbox-input" type="checkbox" />
            </div>
            <div className="words-list__word">
              <strong className="words-list__en-word">English</strong>
              <span className="words-list__sign">—</span>
              <span className="words-list__translate">Английский</span>
            </div>
            <div className="words-list__word-remove">DEL</div>
          </div>
          <div className="words-list_row">
            <div className="words-list__checkbox">
              <input className="words-list__checkbox-input" type="checkbox" />
            </div>
            <div className="words-list__word">
              <strong className="words-list__en-word">English</strong>
              <span className="words-list__sign">—</span>
              <span className="words-list__translate">Английский</span>
            </div>
            <div className="words-list__word-remove">DEL</div>
          </div>
          <div className="words-list_row">
            <div className="words-list__checkbox">
              <input className="words-list__checkbox-input" type="checkbox" />
            </div>
            <div className="words-list__word">
              <strong className="words-list__en-word">English</strong>
              <span className="words-list__sign">—</span>
              <span className="words-list__translate">Английский</span>
            </div>
            <div className="words-list__word-remove">DEL</div>
          </div>
          <div className="words-list_row">
            <div className="words-list__checkbox">
              <input className="words-list__checkbox-input" type="checkbox" />
            </div>
            <div className="words-list__word">
              <strong className="words-list__en-word">English</strong>
              <span className="words-list__sign">—</span>
              <span className="words-list__translate">Английский</span>
            </div>
            <div className="words-list__word-remove">DEL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
