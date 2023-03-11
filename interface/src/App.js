import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {RegistrePacient} from './doctor/pages/register/index'
import { Dashboard} from './doctor/pages/dashboard/dashboard'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<RegistrePacient/>}/>
        <Route path='dashboard' element={< Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
