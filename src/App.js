import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './screen/Dashboard';
import './App.css'
import Header from './components/navbar/Header';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Message from './components/Messages/Message';
import TakeHomeAssignment from './screen/take_home_assignment/TakeHomeAssignment';
import { DashboardDataProvider, MessageDataProvider, ProfileDataProvider, UserDataProvider } from './context';
import Main from './layout/Main';


function App() {
  return (
    <div>
      <UserDataProvider>
        <DashboardDataProvider>
          <ProfileDataProvider>
            <MessageDataProvider>

              <Router>
                <div className='header_sidebar'>
                  <Header />
                </div>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/home" element={<Main Component={Home} />} />
                  <Route path="/job" element={<Main Component={Jobs} />} />
                  <Route path="/profile" element={<Main Component={Profile} />} />
                  <Route path="/messages" element={<Main Component={Message} />} />
                  <Route path='/take-home' element={<Main Component={TakeHomeAssignment} />} />
                </Routes>
              </Router>
            </MessageDataProvider>
          </ProfileDataProvider>
        </DashboardDataProvider>
      </UserDataProvider>
    </div >
  );
}

export default App;


