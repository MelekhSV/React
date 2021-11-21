import React from "react";
import classes from'./Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {
    let dialogs = [
        {id:1, name:'dima'},
        {id:2, name:'Sveta'}
    ]

    let messages = [
        {id:1, message:'Hello'},
        {id:2, message: 'How are you'}
    ]

    let dialogsElements = dialogs
        .map( (d) => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElement = messages.map( (m) => <Message message={m.message}/> );

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