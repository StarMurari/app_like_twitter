import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import PageLoading from './pages/PageLoading';
import ProtectedRoute from './pages/ProtectedRoute';
import Feed from "./pages/feed/Feed";
import Lists from './pages/lists/Lists';
import Explore from './pages/explore/Explore'
import Notifications from './pages/notifications/Notifications';
import Messages from './pages/messages/Messages';
import Profile from './pages/profile/Profile';
import More from './pages/more/More';
import Bookmarks from './pages/bookmarks/Bookmarks';


function App() {
  return (
    <div className="App">
      {/* <h1>Hello From Twitter</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ProtectedRoute><Home /></ProtectedRoute> } >
            <Route index element={<Feed />} />
          </Route>
          <Route path='/home' element={ <ProtectedRoute><Home /></ProtectedRoute> }>
            <Route path='feed' element={<Feed />} />
            <Route path='lists' element={<Lists />} />
            <Route path='explore' element={<Explore />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='messages' element={<Messages />} />
            <Route path='profile' element={<Profile />} />
            <Route path='more' element={<More />} />
            <Route path='bookmarks' element={<Bookmarks />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/page-loading' element={<PageLoading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
