import"./styles.css";
import data from "./datos.js";

export default function App() {
  let nose = Math.floor(Math.random() * data.length);

  return (
    <div>
    <h1 className="Página"> ¡Bienvenido!</h1>
    <div className="App">
      <img
        className="Avatar"
        width="200"
        height="200"
        src="https://api.minimalavatars.com/avatar/random/png"
      />
      <div className="texto">
        <h2 className="Página"> ¡Felicidades, ya tienes tu alien!</h2>
        <ul>
        <h2 className="Página"> Su nombre es: "{data[nose].name}" </h2>
        <h2 className="Página"> Proviene del planeta: "{data[nose].planet}" </h2>
        <h2 className="Página"> Su frase es: {data[nose].phrase}" </h2>
        </ul>
      </div>
    </div>
    </div>
  );
}
