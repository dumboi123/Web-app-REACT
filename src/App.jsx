import "./css/App.css";
import NavBar from "./components/NavBar";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
function Test({ text }) {
  const condition = true;
  return <>{condition && <div>{text}</div>}</>;
}
export default App;
