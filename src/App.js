import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './screen/Dashboard';
import './App.css'
import Header from './components/navbar/Header';
import Sidebar from './components/navbar/Sidebar';
import Profile from './components/profile/Profile';
import { ProfileDataProvider } from './context/profileContext';
import Message from './components/Messages/Message';
import { DashboardDataProvider } from './context/dashboardContext';


function App() {
  return (
    <div>
      <Router>
        <div className='header_sidebar'>
          <Header />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <DashboardDataProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Message />} />
          </Routes>
        </DashboardDataProvider>
      </Router>
    </div>
  );
}

export default App;


