import { useState } from "react";
import "./App.css"; 
import languages from "./components/languages";
import ButtonAll from "./components/ButtonAll";

function App() {

  // stato che tiene traccia del linguaggio selezionato
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div>
      <div className="header-title">
        <h1>Learn web development</h1>
      </div>

      {/* lista dei bottoni */}
      <div className="cnt-main">
      <ButtonAll
        languages={languages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      {/* info sul linguaggio selezionato  */}
      <div className="box-detail-language">
        <h3>{selectedLanguage.title}</h3>
        <p>{selectedLanguage.description}</p>
      </div>
    </div>
    </div>
  );
}

export default App;
