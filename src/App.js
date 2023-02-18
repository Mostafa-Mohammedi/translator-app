import './App.css';
import Login from './views/Login';
import Profile from './views/Profile';
import {BrowserRouter as Routing, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  //console.log( process.env.REACT_APP_API_KEY)

  return (
      <Routing>
        <div className='App'>
          <Navbar/>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        </div>
      </Routing>
  );
}

export default App;
