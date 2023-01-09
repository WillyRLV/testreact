import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Routesmain from './Routes/main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/*aqui la ruta del comentario */}
      <Routesmain/>

    </div>
  );
}

export default App;
