import React from "react";
import classes from'./Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";



const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;


    let dialogsElements = state.dialogs
        .map( (d) => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElement = state.messages.map( (m) => <Message message={m.message}/> );
    let newMessageBody = state.newMessageText;

    let onsendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let newMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                   <div> {messagesElement}</div>
                    <div>
                        <div> <textarea onChange={newMessageChange} value={newMessageBody} placeholder='Enter your message' ></textarea> </div>
                        <div> <button onClick={onsendMessageClick}> Send</button></div>

                    </div>
            </div>
        </div>

    );
}

export default Dialogs