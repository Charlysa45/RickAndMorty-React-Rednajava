import './App.css';
import Header from './pages/Header/Header';
import Filters from './pages/Home/components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Filters />
      </main>
    </div>
  );
}

export default App;
