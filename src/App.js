import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Routesmain from './Routes/main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/*aqui la ruta del comentario */}
      <Routesmain/>
<Footer/>
    </div>
  );
}

export default App;
