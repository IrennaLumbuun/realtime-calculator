import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import InputBar from './Components/InputBar/InputBar';

function App() {
  return (
    <div className="App">
      <h1>Calculator app</h1>
      <InputBar/>
      <div>Placeholder for log viewer</div>
    </div>
  );
}

export default App;
