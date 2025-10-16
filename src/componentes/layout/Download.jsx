import './Download.css';

function Download({ onBack }) {
    return (
        <div className='btns-box'>
            <button className="btn-back" onClick={onBack} >Voltar</button>
            <button className="btn-download">Download</button>
        </div>
    )
}
export default Download;