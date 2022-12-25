import logo from './logo.svg';
import './App.css';
import Student from './student/Student';
import StudentUseState from './student/StudentUseState';
import StudentStateClassComponent from './student/classComponents/StudentStateClassComponent';
import StudentStateClassCountComponent from './student/classComponents/StudentStateClassCountComponent';


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
      </header>
      <Student />
      <StudentUseState />
      <StudentStateClassComponent />
      <StudentStateClassCountComponent />
    </div>
    
  );
}

export default App;
