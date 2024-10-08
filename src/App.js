import './App.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';

function App() {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={user?<Home />:<Navigate to={'/register'}/>}/> 
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        {
          user && 
          <>
            <Route path='/movies' element={<Home type={'movies'}/>}/>
            <Route path='/series' element={<Home type={'series'}/>}/>
            <Route path='/watch' element={<Watch/>}/>
          </>
        }
      </Routes>
    </Router>
  );
}

export default App;
