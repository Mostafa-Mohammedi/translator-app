import Startup from './views/Startup';
import Profile from './views/Profile';
import TranslationPage from './views/TranslationPage';
import {BrowserRouter as Routing, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Routing>
        <div className='App'>
        <Routes>
          <Route exact path='/' element={<Startup/>}/>
          <Route path='/main' element={<TranslationPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        </div>
      </Routing>
  );
}

export default App;
