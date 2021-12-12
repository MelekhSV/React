import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png'/>
            <div className={classes.loginBlock}>
                { props.isAuths
                    ? <div> {props.login} -<button onClick={props.logout}> Logout</button> </div>
                    : <NavLink to='login/'>Login</NavLink>
                }

            </div>

        </header>
    );
}

export default Header;
