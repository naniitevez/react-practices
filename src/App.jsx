import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div id="app">
      <button onClick={() => navigate("/gallery")}>Galería</button>
    </div>
  );
}

export default App;
