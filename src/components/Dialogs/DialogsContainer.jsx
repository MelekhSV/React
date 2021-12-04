import React from "react";


import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../Context/StoreContext";


export const DialogsConteiner = (props) => {

    // let state = props.store.getState().messagesPage;
    //
    //
    //
    // let onsendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    // let newMessageChange = (body) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    //
    // }

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                let state = store.getState().messagesPage;

                let onsendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let newMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))

                }
                return (< Dialogs sendMessageCreator={onsendMessageClick} updateNewMessageBody={newMessageChange}
                                  messagesPage={state}/>)
            }
        }

        </StoreContext.Consumer>


    );
}
