import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import { Restricted } from "./pages/Restricted";
import { Login } from "./pages/Login";
import { Accueil } from "./pages/Accueil/Accueil.jsx";
import { HomeStagiaire } from "./pages/Home-stagiaire/Home-stagiaire.jsx";
<<<<<<< HEAD
import { AccueilStagiaire } from "./pages/Stagiaire/AccueilStagiaire";
=======

>>>>>>> 82a5ece (home-stagiaire)
function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restricted authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
        <Route path="/connexion" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/accueil" element={<Accueil/>} />
        <Route path="/homestagiaire" element={<HomeStagiaire/>} />
        <Route path="/accueil-stagiaire" element={<AccueilStagiaire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
