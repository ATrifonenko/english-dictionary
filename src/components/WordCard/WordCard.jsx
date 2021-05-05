import './WordCard.css';

function WordCard(props) {
  const [word] = props.word;

  const meanings = word.meanings.map((meaning, index) => {
    const definitions = meaning.definitions.map((definition, index) => (
      <div className="definitions-list__definition" key={index}>
        <p className="definition">
          <span>{index + 1}.</span>
          {definition.definition}
        </p>
        {definition.example ? (
          <p className="example">
            <span>example:</span>
            {definition.example}
          </p>
        ) : null}
        {definition.synonyms ? (
          <p className="synonyms">
            <span>synonyms:</span>
            {definition.synonyms.join(', ')}
          </p>
        ) : null}
      </div>
    ));

    return (
      <div className="wordcard__word-meaning" key={index}>
        <h3 className="part-of-speach">{meaning.partOfSpeech}</h3>
        <div className="definitions-list">{definitions}</div>
      </div>
    );
  });

  return (
    <div className="wordcard">
      <div className="close"></div>
      <div className="wordcard__header">
        <h2 className="wordcard__word">{word.word}</h2>
        <button className="wordcard__add-word">Добавить в словарь</button>
      </div>
      {meanings}
    </div>
  );
}

export default WordCard;
