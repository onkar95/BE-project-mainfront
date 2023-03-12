import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './screen/Home';
import './App.css'
import Header from './components/navbar/Header';
import Sidebar from './components/navbar/Sidebar';
import Profile from './components/profile/Profile';
import ProfileContext, { ProfileDataProvider } from './context/profileContext';


function App() {
  return (
    <div>
      <Router>
        {false ?
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          :
          <ProfileDataProvider>

            <div className='App'>
              <div className='header_sidebar'>
                <Header />
              </div>
              <div className='components'>
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </div>
          </ProfileDataProvider>
        }
      </Router>
    </div>
  );
}

export default App;


