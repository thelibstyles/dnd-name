// import logo from './logo.svg';
import './App.css';
import Notification from './components/Notification';
import NamesList from './components/NamesList';


function App() {
  return (
    <div className="App">

      <header className="App-header">

        <h1>⚔️ DnD Dwarf name generator</h1>

      </header>

      <main>

      <Notification 
      heading="Your next mighty dwarf name is a below!"
      icon="🔥" 
      text="Welcome to the DND dwarf name generator, create an epic name for your next session or campaign as the stoic dwarf you are!."
      />

      <NamesList />



      </main>

      <footer>
        Created using React, a cup of tea and some free time. 2021
      </footer>
      
    </div>
  );
}

export default App;
