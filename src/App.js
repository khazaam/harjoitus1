import './App.css';
import '@mui/material';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is the assigment 1.2</p>
        <h2>Set timer for morning.</h2>
        <div>
        <Button variant="text">8</Button>
        <Button variant="outlined">15</Button>
        <Button variant="contained">Set</Button>
      </div>
      </header>

    </div>
  );
}

export default App;