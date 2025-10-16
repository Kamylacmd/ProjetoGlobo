import './Generate.css';

function Generate({ onGenerate }) {
    return (
        <button className="btn-generate" onClick={onGenerate} >
            Gerar
        </button>
    )
}

export default Generate;