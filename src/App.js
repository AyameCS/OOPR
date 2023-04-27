import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ApN from './Components/log'
import Registry from './Components/Registration';
function App() {
  return (
    <div className="App">
  <Routes>
  <Route path= '/' element={<Header />}/>
  <Route path= '/lgn' element={<ApN />}/>
  <Route path= '/reg' element={<Registry />}/>
  </Routes>
    </div>
  );
}

export default App;
