import './Title.css';

function Title({ onChange }) {
  const handleInput = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Digite o título aqui:"
      onChange={handleInput}
    />
  );
}

export default Title;