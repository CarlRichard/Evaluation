import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import { Restricted } from "./pages/Restricted";
import { Login } from "./pages/Login";
import { Accueil } from "./pages/Accueil/Accueil.jsx";
import { HomeStagiaire } from "./pages/Stagiaire/Home-stagiaire/Home-stagiaire.jsx";
import { AccueilStagiaire } from "./pages/Stagiaire/AccueilStagiaire/AccueilStagiaire.jsx";
import { AccueilFormateur } from "./pages/Formateur/AccueilFormateur/AccueilFormateur.jsx";
import { ListQuestionnaireFormateur } from "./pages/Formateur/ListeQuestionnaireFormateur/ListeQuestionnaireFormateur.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restricted authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
        <Route path="/connexion" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/homestagiaire" element={<HomeStagiaire />} />
        <Route path="/accueil-stagiaire" element={<AccueilStagiaire />} />
        <Route path="/accueil-formateur" element={<AccueilFormateur />} />
        <Route path="/questionnaire-formateur" element={<ListQuestionnaireFormateur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
