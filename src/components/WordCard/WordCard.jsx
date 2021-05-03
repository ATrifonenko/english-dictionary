import './WordCard.css';

function WordCard() {
  return (
    <div className="wordcard">
      <div className="close"></div>
      <div className="wordcard__header">
        <h2 className="wordcard__word">House</h2>
        <button className="wordcard__add-word">Добавить в словарь</button>
      </div>
      <div className="wordcard__word-meaning">
        <h3 className="part-of-speach">transitive verb</h3>
        <div className="definitions-list">
          <div className="definitions-list__definition">
            <p className="definition">
              <span>1.</span>Provide (a person or animal) with shelter or living quarters.
            </p>
            <p className="example">
              <span>example:</span>attempts by the government to house the poor
            </p>
            <p className="synonyms">
              <span>synonyms:</span>accommodate, provide accommodation for, make space for
            </p>
          </div>
          <div className="definitions-list__definition">
            <p className="definition">
              <span>2.</span>Provide space for; accommodate.
            </p>
            <p className="example">
              <span>example:</span>the museum houses a collection of Roman sculpture
            </p>
            <p className="synonyms">
              <span>synonyms:</span>"contain", "hold", "store", "cover"
            </p>
          </div>
          <div className="definitions-list__definition">
            <p className="definition">
              <span>3.</span>Eat the whole of (something), typically very quickly.
            </p>
          </div>
        </div>
      </div>
      <div className="wordcard__word-meaning">
        <h3 className="part-of-speach">noun</h3>
        <div className="definitions-list">
          <div className="definitions-list__definition">
            <p className="definition">
              <span>1.</span>A building for human habitation, especially one that is lived in by a family or small group
              of people.
            </p>
            <p className="example">
              <span>example:</span>my wife and I are moving to a new house
            </p>
            <p className="synonyms">
              <span>synonyms:</span>
              "home", "place of residence", "homestead", "lodging place", "a roof over one's head"
            </p>
          </div>
          <div className="definitions-list__definition">
            <p className="definition">
              <span>2.</span>A building in which people meet for a particular activity.
            </p>
            <p className="example">
              <span>example:</span>a house of prayer
            </p>
          </div>
          <div className="definitions-list__definition">
            <p className="definition">
              <span>3.</span>A style of popular dance music typically using synthesized drum and bass lines, sparse
              repetitive vocals, and a fast beat.
            </p>
            <p className="example">
              <span>example:</span>DJs specializing in techno, garage, and house
            </p>
          </div>
        </div>
      </div>
      <div className="wordcard__word-meaning">
        <h3 className="part-of-speach">adjective</h3>
        <div className="definitions-list">
          <div className="definitions-list__definition">
            <p className="definition">
              <span>1.</span>(of an animal or plant) kept in, frequenting, or infesting buildings.
            </p>
            <p className="example">
              <span>example:</span>
              The study also showed that rather than living in hutches, four out of 10 pet rabbits were house rabbits.
            </p>
          </div>
          <div className="definitions-list__definition">
            <p className="definition">
              <span>2.</span>Relating to a business, institution, or society.
            </p>
            <p className="example">
              <span>example:</span>a house journal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordCard;
