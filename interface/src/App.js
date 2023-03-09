import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {RegistrePacient} from './doctor/pages/register/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<RegistrePacient/>}/>
      </Routes>
    </Router>
  );
}

export default App;
