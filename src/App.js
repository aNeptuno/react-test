import logo from './kek.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://masonlindroth.tumblr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          cool game!
        </a>
      </header>
    </div>
  );
}

export default App;
