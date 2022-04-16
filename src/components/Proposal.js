import '../App.css';

function Proposal() {
  return (
    <div className='proposal'>
        <h2>Name your proposal</h2>
        <input className='input-proposal'></input>
        <h2>Describe your proposal</h2>
        <input className='input-description'></input>
        <button className='gold-button'>Submit</button>
    </div>
  );
}

export default Proposal;