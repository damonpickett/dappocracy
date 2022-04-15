import '../App.css';

// Create Proposal button mounts Proposal component
// Cast Vote button checks user address...
// If user has address has been added to a proposal, available proposal component mounts...
// and user chooses the proposal to vote on...
// If user has not been added to a vote, a "sorry you can't vote" component mounts

function Landing() {
  return (
    <div className='landing'>
        <button className='gold-button'>Create Proposal</button>
        <button className='gold-button'>Cast Vote</button>
    </div>
  );
}

export default Landing;
