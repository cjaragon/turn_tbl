import Routes from './routes'
import Header from './components/header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>  
      {Routes}   
    </div>
  );
}

export default App;
