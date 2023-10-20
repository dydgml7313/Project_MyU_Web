import logo from './main_logo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-logo'>
          <img src={logo} alt='Logo'></img> 
        </div>
      </header>
      <main>
        <p>This is the main content of my website.</p>
      </main>
      <footer>
        <p>&copy; 2023 Team 모태솔로</p>
      </footer>
    </div>
  );
}

export default App;
