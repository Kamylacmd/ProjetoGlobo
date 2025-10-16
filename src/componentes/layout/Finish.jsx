import Clipe from "./clipe";
import Download from "./Download";
import './Finish.css';

function Finish({ onBack }) {
    return (
        <div className="finish-layout">
            <h2>Resultado:</h2>
            <Clipe/>
            <Download onBack={onBack}/>
        </div>
    )
}

export default Finish;