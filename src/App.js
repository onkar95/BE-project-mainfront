import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './screen/Dashboard';
import './App.css'
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import Message from './components/Messages/Message';
import { AssignmentDataProvider, DashboardDataProvider, MessageDataProvider, ProfileDataProvider, UserDataProvider } from './context';
import Main from './layout/Main';
import Auth from './layout/Auth';
import MobileMessages from './components/Messages/MobileMessages';
import TakeHomeAssignment from './components/home/take_home_assignment/TakeHomeAssignment';
import ProfileScreen from './components/profile/profileDetail/ProfileScreen';


function App() {
  return (
    <>
      <UserDataProvider>
        <AssignmentDataProvider>
          <DashboardDataProvider>
            <ProfileDataProvider>
              <MessageDataProvider>

                <Router>
                  <Routes>
                    <Route path="/login" element={<Auth Component={Login} />} />
                    <Route path="/register" element={<Auth Component={Register} />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/home" element={<Main Component={Home} />} />
                    <Route path="/job" element={<Main Component={Jobs} />} />
                    <Route path="/profile" element={<Main Component={Profile} />} />
                    <Route path="/messages" element={<Main Component={Message} />} />
                    <Route path="/chat/:id" element={<Main Component={MobileMessages} />} />
                    <Route path='/take-home' element={<Auth Component={TakeHomeAssignment} />} />
                    <Route path='/profiledetail' element={<Main Component={ProfileScreen} />} />
                  </Routes>
                </Router>
              </MessageDataProvider>
            </ProfileDataProvider>
          </DashboardDataProvider>
        </AssignmentDataProvider>
      </UserDataProvider>
    </ >
  );
}

export default App;


