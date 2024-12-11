import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Login Components/ForgotPassword';
import Main from './Login Components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
