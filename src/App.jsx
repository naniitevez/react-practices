import { useNavigate } from "react-router-dom";
import "./App.scss";

function App() {
  const navigate = useNavigate();

  return (
    <div id="app">
      <button onClick={() => navigate("/gallery")}>Galería</button>
      <button onClick={() => navigate("/library")}>Biblioteca</button>
    </div>
  );
}

export default App;
