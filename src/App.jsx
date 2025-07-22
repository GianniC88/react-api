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
    </>
  );
}

export default App;
