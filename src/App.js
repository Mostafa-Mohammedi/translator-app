import './App.css';
import Login from './views/Login';
import Main from './views/Main';
import Profile from './views/Profile';


import {BrowserRouter as Routing, Routes, Route} from 'react-router-dom'

function App() {
  console.log( process.env.REACT_APP_API_KEY)

  return (
      <Routing>
        <div className='App'>
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
