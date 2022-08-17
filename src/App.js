import './App.css';
import ConverterBlock from './components/ConverterBlock/ConverterBlock';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ConverterBlock/>
      </div>
    </div>
  );
}

export default App;
