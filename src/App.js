import logo from './logo.svg';
import './App.css';

function App() {
  const buttonAlert = () => {
    window.alert('警告ざます')
  }
  return (
    <div className="App">
      <button onClick={buttonAlert}>Hello World</button>
    </div>
  );
}

export default App;
