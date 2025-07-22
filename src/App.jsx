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
      <header className="bg-secondary">
        <div className="container p-3">
          <h1
            className="text-center
         me-3 me-3"
          >
            <i className="bi bi-camera-reels me-3 text-info"></i>Attrici
          </h1>
          <button className="bg-primary text-light" onClick={handleClick}>
            Carica lista Attrici
          </button>
        </div>
      </header>

      <section className="characters bg-danger p-3 ">
        <div className="container">
          <div className="row">
            {charactersDate &&
              charactersDate?.map((characters, index) => {
                return (
                  <div key={characters.id || index} className="col-4 mb-4">
                    <div className="card bg-secondary h-100  ">
                      <img
                        className="card-img-top  "
                        src={characters.image}
                        alt={characters.name}
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                      <div className="p-3 text-light">
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
