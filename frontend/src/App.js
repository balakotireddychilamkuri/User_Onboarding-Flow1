
import EmailVerify from './Compoent/Emailverify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PerDet from './Compoent/ProsonDetail';
import LoginPage from './Compoent/LoginPage';
import SignUp from './Compoent/Signup';


function App() {
  return (
    <>
    
     <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/emailverify" element={<EmailVerify />} />
        <Route path="/ProsonDetail" element={<PerDet />} />
        <Route path="/Signup" element={<SignUp/> } />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
