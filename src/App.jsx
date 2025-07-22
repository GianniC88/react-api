import { useState } from "react";

function App() {
  const url = "https://lanciweb.github.io/demo/api/actresses/";
  const [charactersDate, setCharactersDate] = useState(null);

  function handleClick() {
    console.log("fetch date");
    fetch(url)
      .then((res) => res.json())
      .then((date) => {
        console.log(date);
        setCharactersDate(date);
      });
  }

  return (
    <>
      <h1>Attrici</h1>
      <button onClick={handleClick}>Carica lista Attrici</button>
      <hr />
      <section className="characters">
        <div className="container">
          <div className="row">
            {charactersDate &&
              charactersDate?.map((characters, index) => {
                return (
                  <div key={characters.id || index} className="col">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={characters.image}
                        alt={characters.name}
                      />
                      <h4>{characters.name}</h4>
                      <p>
                        <strong>Anno di nascita:</strong>{" "}
                        {characters.birth_year}
                      </p>
                      <p>
                        <strong>Nazionalità:</strong> {characters.nationality}
                      </p>
                      <p>
                        <strong>Premi:</strong> {characters.awards}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
