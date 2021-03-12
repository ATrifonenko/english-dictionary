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
              <select>
                <option value="1">Значение 1</option>
                <option value="2">Значение 2</option>
                <option value="3">Значение 3</option>
                <option value="4">Значение 4</option>
                <option value="5">Значение 5</option>
              </select>
            </div>
          </div>
          <div className="menu__control">
            <div className="menu__select-container">
              <select>
                <option value="1">Добавить в 1</option>
                <option value="2">Добавить в 2</option>
                <option value="3">Добавить в 3</option>
                <option value="4">Добавить в 4</option>
                <option value="5">Добавить в 5</option>
              </select>
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
