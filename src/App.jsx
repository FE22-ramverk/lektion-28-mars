import { useState } from 'react';
import './App.css'
import Attendees from './Components/Attendees';
import PrimaryButton from './Components/PrimaryButton'

function App() {
  const [showAttendees, setShowAttendees] = useState(false);

  function handleShowAttendees() {
    setShowAttendees(true);
  }

  return (
    <div className="App">
      <PrimaryButton title="Visa deltagare" action={handleShowAttendees} />
      {showAttendees ? <Attendees /> : null}
    </div>
  )
}

export default App
