import React from "react";
import classes from'./../Dialogs.module.css'



const Message = (props) => {

    let newmessageElenent = React.createRef();

    let addText = () => {
        let text = newmessageElenent.current.value;
        alert(text)
    };
    return (
        <div className={classes.dialog}>
            {props.message}
        </div>

    );
}



export default Message