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
import { AccueilAdmin } from "./pages/Administrateur/AccueilAdmin/AccueilAdmin.jsx";
import { FeedbackUtilisateur } from "./pages/Administrateur/FeedbackUtilisateurAjoute/FeedbackUtilisateur.jsx";
import { FeedbackSupprimer } from "./pages/Administrateur/FeedbackSupprimer/FeedbackSupprimer.jsx";
import { ConfirmationSupprimer } from "./pages/Administrateur/ConfirmationSupprimer/ConfirmationSupprimer.jsx";
import { FeedbackQuestionnaires } from "./pages/Stagiaire/FeedbackQuestionnaires/FeedbackQuestionnaires.jsx";
import { FeedbackQuestionnairesF } from "./pages/Formateur/FeedbackQuestionnairesF/FeedbackQuestionnairesF.jsx";


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
        <Route path="/accueil-admin" element={<AccueilAdmin />} />
        <Route path="/feedback-utilisateur" element={<FeedbackUtilisateur />} />
        <Route path="/feedback-supprimer" element={<FeedbackSupprimer />} />
        <Route path="/confirmation-supprimer" element={<ConfirmationSupprimer />} />
        <Route path="/feedback-questionnaire" element={<FeedbackQuestionnaires />} />
        <Route path="/feedback-questionnairesf" element={<FeedbackQuestionnairesF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
