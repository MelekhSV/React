import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {store} from "./redux/redux-store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Musics from "./components/Musics/Musics";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
import {UsersContainer} from "./components/Users/Usercontainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {newHeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeThunkCreator} from "./redux/app-reducer";
import {store} from "./redux/redux-store";



export class App extends React.Component {
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
                            <Route path='/dialogs'
                                   render={() => {
                                       return  <React.Suspence fallback={<div>Loading...</div>}><DialogsContainer/></React.Suspence>
                                   }}
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/news' element={< News/>}/>
                            <Route path='/musics' element={<Musics/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>);
    }
}
const mapStateToProps = (state) => {
    initialized: state.app.initialized
}
export const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeThunkCreator})(App));



export let SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

