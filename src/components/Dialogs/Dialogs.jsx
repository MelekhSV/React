import React from "react";
import classes from'./Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs
        .map( (d) => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElement = props.state.messages.map( (m) => <Message message={m.message}/> );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                    {messagesElement}
            </div>
        </div>

    );
}

export default Dialogs