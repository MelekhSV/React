import React, {Component} from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuths: state.auth.isAuths
    }
}

export const authRedirectHoc = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuths === false) {
                return <Redirect to={'/login'} />
            };
            return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent
}