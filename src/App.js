import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './screen/Dashboard';
import './App.css'
import Header from './components/navbar/Header';
import Profile from './components/profile/Profile';
import { DashboardDataProvider } from './context/dashboardContext';
import { UserDataProvider } from './context/userContext';
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Sidebar from './components/navbar/Sidebar';
import { ProfileDataProvider } from './context/profileContext';
import Message from './components/Messages/Message';


function App() {
  return (
    <div>
      <UserDataProvider>
        <DashboardDataProvider>
          <ProfileDataProvider>
            <Router>
              <div className='header_sidebar'>
                <Header />
              </div>
              <div className='components'>


                <Sidebar />
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/job" element={<Jobs />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/messages" element={<Message />} />
                </Routes>
              </div>
            </Router>
          </ProfileDataProvider>
        </DashboardDataProvider>
      </UserDataProvider>
    </div >
  );
}

export default App;


