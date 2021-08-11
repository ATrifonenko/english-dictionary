import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { updateWordList } from '../../api';
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg';
import { getWords } from './wordlistSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Wordlist.css';

function Wordlist() {
  const words = useSelector((state) => state.wordlist);
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = updateWordList(user.uid, (words) => dispatch(getWords(words)));
    return () => unsubscribe();
  }, [user, dispatch]);

  const rows = words.map((word) => (
    <div className="wordslist_row" key={word.id}>
      <div className="checkbox wordslist__checkbox">
        <label htmlFor={word.id} className="checkbox__label">
          <input id={word.id} type="checkbox" className="checkbox__input" />
          <span className="checkbox__box"></span>
          <span className="checkbox__icon"></span>
        </label>
      </div>

      <div className="wordslist__word">
        <strong className="wordslist__en-word">{word.en.word}</strong>
        {/* <span className="wordslist__sign"> — </span>
        <span className="wordslist__translate">{word.ru?.word || ''}</span> */}
      </div>
      <div className="wordslist__word-remove">
        <div className="icon">
          <span className="icon__delete">
            <DeleteSVG />
          </span>
        </div>
      </div>
    </div>
  ));
  return <div className="wordslist">{rows}</div>;
}

export default Wordlist;
