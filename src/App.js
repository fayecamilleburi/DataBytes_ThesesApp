
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Login Components/ForgotPassword';
import Main from './Login Components/Main';
import Librarian from './Librarian/Librarian'
import Unlogged from './Unlogged Components/Unlogged';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Unlogged />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<Main />} />
        <Route path="/lib" element={<Librarian />} />
      </Routes>
    </Router>
  );
}

export default App;
