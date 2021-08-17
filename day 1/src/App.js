
import './App.css';
import Header from './Header'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
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
        <Footer/>
      </header>
     
    </div>
  );
}

export default App;
