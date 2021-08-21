import { useState } from 'react';
import { getDefinitionFromDictionaryApi } from '../../api';
import { useSelector } from 'react-redux';
import './Search.css';

function Search({ setDefinitionToState }) {
  const words = useSelector((state) => state.wordlist);
  const [input, setInput] = useState('');

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.length > 0) {
      const wordFromState = words.find((el) => el.en.word === input);
      if (wordFromState) {
        setDefinitionToState([wordFromState.en]);
      } else {
        getDefinitionFromDictionaryApi(input).then((definition) => {
          console.log(definition);
          setDefinitionToState(definition);
        });
      }
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
