import { useState } from 'react';
import { getDefinitionFromDictionaryApi } from '../../api';
import './Search.css';

function Search({ setDefinitionToState }) {
  const [input, setInput] = useState('');

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.length > 0) {
      getDefinitionFromDictionaryApi(input).then((definition) => setDefinitionToState(definition));
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Найти слово"
        onChange={handleChangeInput}
        onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button className="search__btn" onClick={handleSearch}>
        Найти
      </button>
    </div>
  );
}

export default Search;
