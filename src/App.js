import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="*" element={'Not Found'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
