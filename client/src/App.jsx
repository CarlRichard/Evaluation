import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
// import { Restricted } from "./pages/Restricted";
import { Login } from "./pages/Login";
import { Accueil } from "./pages/Accueil/Accueil.jsx";
import { HomeStagiaire } from "./pages/Stagiaire/Home-stagiaire/Home-stagiaire.jsx";
import { ModifProfilS } from "./pages/Stagiaire/ModifProfilS/ModifProfilS.jsx";
import { ModifProfilF } from "./pages/Formateur/ModifProfilF/ModifProfilF.jsx";
import { Inscription } from "./pages/Inscription";
import { FeedbackProfilS } from "./pages/Stagiaire/FeedbackProfilS/FeedbackProfilS.jsx";
import { FeedbackProfilF } from "./pages/Formateur/FeedbackProfilF/FeedbackProfilF.jsx";
import { FeedbackInscription } from "./pages/FeedbackInscription/FeedbackInscription.jsx";
import { AccueilAdmin } from "./pages/Administrateur/AccueilAdmin/AccueilAdmin.jsx";
import { FeedbackUtilisateur } from "./pages/Administrateur/FeedbackUtilisateurAjoute/FeedbackUtilisateur.jsx";
import { FeedbackSupprimer } from "./pages/Administrateur/FeedbackSupprimer/FeedbackSupprimer.jsx";
import { ConfirmationSupprimer } from "./pages/Administrateur/ConfirmationSupprimer/ConfirmationSupprimer.jsx";
import { FeedbackQuestionnaires } from "./pages/Stagiaire/FeedbackQuestionnaires/FeedbackQuestionnaires.jsx";
import { FeedbackQuestionnairesF } from "./pages/Formateur/FeedbackQuestionnairesF/FeedbackQuestionnairesF.jsx";
import { AccueilFormateur } from "./pages/Formateur/AccueilFormateur/AccueilFormateur.jsx";
import { ListeQuestionnaireFormateur } from "./pages/Formateur/ListeQuestionnaireFormateur/ListeQuestionnaireFormateur.jsx";
import { GraphFormateur } from "./pages/Formateur/GraphFormateur/GraphFormateur.jsx";
import { ListeStagiaire } from "./pages/Formateur/ListeStagiaire/ListeStagiaire.jsx";
import { GestionAdmin } from "./pages/Administrateur/GestionAdmin/GestionAdmin.jsx";



function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
        <Route path="/connexion" element={<Login setAuthenticated={setAuthenticated} />} />
        {/* <Route path="/accueil" element={<Accueil />} /> */}
        <Route path="/homestagiaire" element={<HomeStagiaire />} />
        <Route path="/accueil-formateur" element={<AccueilFormateur />} />
        <Route path="/modification-du-profil-stagiaire" element={<ModifProfilS />} />
        <Route path="/modification-du-profil-formateur" element={<ModifProfilF />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/feedback-profil-stagiaire" element={<FeedbackProfilS />} />
        <Route path="/feedback-profil-formateur" element={<FeedbackProfilF />} />
        <Route path="/feedback-creation-compte" element={<FeedbackInscription />} />
        <Route path="/accueil-admin" element={<AccueilAdmin authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
        <Route path="/gestion-admin" element={<GestionAdmin authenticated={authenticated} setAuthenticated={setAuthenticated}/>} />
        <Route path="/feedback-utilisateur" element={<FeedbackUtilisateur />} />
        <Route path="/feedback-supprimer" element={<FeedbackSupprimer />} />
        <Route path="/confirmation-supprimer" element={<ConfirmationSupprimer />} />
        <Route path="/feedback-questionnaire" element={<FeedbackQuestionnaires />} />
        <Route path="/feedback-questionnairesf" element={<FeedbackQuestionnairesF />} />
        <Route path="/questionnaire-formateur" element={<ListeQuestionnaireFormateur />} />
        <Route path="/graph-formateur" element={<GraphFormateur />} />
        <Route path="/liste-stagiaire" element={<ListeStagiaire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;