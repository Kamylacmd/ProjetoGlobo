import './Clipe.css';

function Clipe({ template, title }) {
  return (
    <div className="video-preview">
      {template && (
        <img
          src={`./src/assets/templates/${template}`}
          alt="Template selecionado"
          className="template-overlay"
        />
      )}

      {title && (
        <div className="title-overlay">{title}</div>
      )}

    </div>
  );
}

export default Clipe;
