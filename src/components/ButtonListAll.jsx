
//componente che rapresenta un bottone della lista

export default function ButtonListAll({ language, isActive, onSelect }) {
  return (
    <button onClick={() => onSelect(language)}>
      {language.title}
    </button>
  );
}
