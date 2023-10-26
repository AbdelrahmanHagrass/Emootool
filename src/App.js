import './App.css';
import LoginScreen from './pages/LoginScreen';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            <div style={{ width: 761, boxShadow: "2px 2px #b7b3b3" }}>
              <LoginScreen />
            </div>} />
          <Route path='/Main' element={
            <div style={{ width: 761, boxShadow: "2px 2px #b7b3b3" }}>
              <MainPage />
            </div>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
