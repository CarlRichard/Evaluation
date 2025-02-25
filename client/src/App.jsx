import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from 'react';
import './App.css';
import { Restricted } from "./pages/Restricted";
import { Login } from "./pages/Login";

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restricted authenticated={authenticated} setAuthenticated={setAuthenticated} />} />
        <Route path="/connexion" element={<Login setAuthenticated={setAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
