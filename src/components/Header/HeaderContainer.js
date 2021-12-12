import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunkCreator, logout} from "../../redux/auth-reducer";



export class HeaderContainer extends React.Component {


    render() {
        return (
            < Header {...this.props} />
        )
    }
}


let mapStateToProps = (state) => ({
    isAuths: state.auth.isAuths,
    login: state.auth.login,
});

export const newHeaderContainer = connect(mapStateToProps, {logout})(HeaderContainer);
