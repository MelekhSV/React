import logo from './logo.svg';
import React from "react";
import './App.css';

import Navbar from './components/Navbar/Navbar'


import {BrowserRouter, Route, Routes} from "react-router-dom";
import Musics from "./components/Musics/Musics";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

import {UsersContainer} from "./components/Users/Usercontainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer, newHeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {logout} from "./redux/auth-reducer";
import {initializeThunkCreator} from "./redux/app-reducer";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


export class App extends React.Component  {
    componentDidMount() {
        this.props.authThunkCreator()
    }
    render() {
        if (!this.props.initialized) {
            return 'hi'
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <newHeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs' element={<DialogsContainer  />}  />
                            {/*<Route path='/profile' element={<MyPostsContainer />}  />*/}
                            <Route path='/profile/:userId?' element={<ProfileContainer />}  />
                            <Route path='/login' element={<Login />}  />
                            <Route path='/users' element={<UsersContainer />}  />
                            <Route path='/news' element={< News />}  />
                            <Route path='/musics' element={<Musics />}  />
                            <Route path='/settings' element={<Settings />}  />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>);
    }
}

const mapStateToProps = (state) => {
    initialized: state.app.initialized
}


export const newApp = compose(
    withRouter,
    connect(mapStateToProps,{initializeThunkCreator})(App));
