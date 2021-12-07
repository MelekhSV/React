import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'


import {BrowserRouter, Route, Routes} from "react-router-dom";
import Musics from "./components/Musics/Musics";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

import {UsersContainer} from "./components/Users/Usercontainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";



const App = (props) => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer  />}  />
                    {/*<Route path='/profile' element={<MyPostsContainer />}  />*/}
                    <Route path='/profile/:userId?' element={<ProfileContainer />}  />

                    <Route path='/users' element={<UsersContainer />}  />
                    <Route path='/news' element={< News />}  />
                    <Route path='/musics' element={<Musics />}  />
                    <Route path='/settings' element={<Settings />}  />
                </Routes>
            </div>
        </div>
    </BrowserRouter>);
}

export default App;
