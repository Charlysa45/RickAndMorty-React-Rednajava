import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './pages/Character/Character';
import Header from './pages/Header/Header';
import Filters from './pages/Home/components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Router>
          <Routes>
            <Route index element={<Filters />}/>
            <Route path="character/:charId" element={<Character />}/>
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
