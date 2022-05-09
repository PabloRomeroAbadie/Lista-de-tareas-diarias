import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import FormTareas from './components/FormTareas';

function App() {
  return (
    <div className="my-5 container">
      <Titulo></Titulo>
      <FormTareas></FormTareas>
    </div>
  );
}

export default App;
