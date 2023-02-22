import Login from './views/Login';
import Profile from './views/Profile';
import Main from './views/Main';
import {BrowserRouter as Routing, Routes, Route} from 'react-router-dom'

function App() {
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
