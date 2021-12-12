import React from "react";
import classes from'./Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Textarea} from "../FormControls/FormsControls";
import {maxLenghtCreator, requiredField} from "../../validations/Validators/validators";

const maxLength = maxLenghtCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[requiredField, maxLength]} name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div> <button onClick={onsendMessageClick}> Send</button></div>
        </form>
    )
}



const AddMessageFormRedux = reduxFrom({form:'dialogAddMessageForm'})(AddMessageForm)






const Dialogs = (props) => {

    let state = props.messagesPage;


    let dialogsElements = state.dialogs
        .map( (d) => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElement = state.messages.map( (m) => <Message message={m.message}/> );
    let newMessageBody = state.newMessageText;

    // let onsendMessageClick = () => {
    //     props.sendMessageCreator()
    // }
    let newMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
    }
    let addNewMessage = (values) => {
        props.sendMessageCreator
    }


    if (props.isAuths === false) {
        return <Redirect to={'/login'} />
    };
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                   <div> {messagesElement}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    );
}

export default Dialogs


