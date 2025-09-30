import ButtonListAll from "./ButtonListAll";


// componente che riceve: lista linguaggi, linguaggio selected, function per aggiornare stato
export default function ButtonAll({ languages, selectedLanguage, setSelectedLanguage }) {
  return (
    <div className="buttons-container">
      {languages.map((lang) => (
        <ButtonListAll
          key={lang.id}
          language={lang}
          isActive={selectedLanguage && selectedLanguage.id === lang.id}
          onSelect={setSelectedLanguage}
        />
      ))}
    </div>
  );
}
