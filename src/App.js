import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent'; // Import ClassComponent

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Display ClassComponent */}

        <ClassComponent />
        <ClassComponent />
        <ClassComponent />





      </header>
    </div>
  );
}

export default App;
