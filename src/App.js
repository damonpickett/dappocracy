import './App.css';
import Landing from './components/Landing'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='wrapper'>
          <h1>Dappocracy</h1>
        </div>
      </div>
      <div className='canvas'>
        <div className='wrapper'>
          <Landing />
        </div>
      </div>
    </div>
  );
}

export default App;
