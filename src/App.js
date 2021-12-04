import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button type="button" onClick="hello()">Hello World</button>
      <script>
        function hello() {
          window.alert('警告ざます')
        }
      </script>
    </div>
  )
}

export default App;
