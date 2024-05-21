import '../App.css';
import SimpleContainer from './intro';
import Servicios from './servicios';
import Productos from './productos';
function First() {
    return (
        <div className="App">
            <SimpleContainer />
            <div id="servicios-section">
                <Servicios />
            </div>
            <div id="productos-section">
                <Productos />
            </div>
        </div>
    );
}

export default First;