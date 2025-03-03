import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import { Restricted } from "./pages/Restricted";
import { Login } from "./pages/Login";
import { Accueil } from "./pages/Accueil/Accueil.jsx";
import { HomeStagiaire } from "./pages/Stagiaire/Home-stagiaire/Home-stagiaire.jsx";
import { AccueilStagiaire } from "./pages/Stagiaire/AccueilStagiaire/AccueilStagiaire.jsx";
import { AccueilFormateur } from "./pages/Formateur/AccueilFormateur.jsx";
import { ModifProfilS } from "./pages/Stagiaire/ModifProfilS/ModifProfilS.jsx";
import { ModifProfilF } from "./pages/Formateur/ModifProfilF/ModifProfilF.jsx";
import { Inscription } from "./pages/Inscription";
import {  FeedbackProfilS } from "./pages/Stagiaire/FeedbackProfilS/FeedbackProfilS.jsx";
import { FeedbackProfilF } from "./pages/Formateur/FeedbackProfilF/FeedbackProfilF.jsx";
import { FeedbackInscription } from "./pages/FeedbackInscription/FeedbackInscription.jsx";

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
        <Route path="/modification-du-profil-stagiaire" element={<ModifProfilS />} />
        <Route path="/modification-du-profil-formateur" element={<ModifProfilF />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/feedback-profil-stagiaire" element={<FeedbackProfilS />} />
        <Route path="/feedback-profil-formateur" element={<FeedbackProfilF />} />
        <Route path="/feedback-creation-compte" element={<FeedbackInscription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
