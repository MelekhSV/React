import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Musics from "./components/Musics/Musics";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {updateNewPostText} from "./redux/state";



const App = (props) => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs state={props.state.messagesPage} />}  />
                    <Route path='/profile' element={<Profile addPost={props.addPost} updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage}/>}  />
                    <Route path='/news' element={< News />}  />
                    <Route path='/musics' element={<Musics />}  />
                    <Route path='/settings' element={<Settings />}  />
                </Routes>
            </div>
        </div>
    </BrowserRouter>);
}

export default App;
