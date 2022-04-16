import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './components/Landing'
import Proposal from './components/Proposal';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='wrapper'>
          <Link className='uni-link'to='/'><h1>Dappocracy</h1></Link>
        </div>
      </div>
      <div className='canvas'>
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/proposal' element={<Proposal />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
