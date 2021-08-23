import logo from './logo.svg';
import './App.css';
import Notification from './components/Notification';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <h1>⚔️ DnD name generator</h1>

      </header>

      <main>

      <Notification 
      heading="Your next mighty name is a few clicks away!"
      icon="🔥" 
      text="Welcome to the DND name generator, create a cool name for your next session or campaign."
      />

      </main>

      <footer>
        Created using React, a cup of tea and some free time. 2021
      </footer>
      
    </div>
  );
}

export default App;
