import React from "react";


import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../Context/StoreContext";
import {connect} from "react-redux";


// export const DialogsConteiner = (props) => {
//
//     // let state = props.store.getState().messagesPage;
//     //
//     //
//     //
//     // let onsendMessageClick = () => {
//     //     props.store.dispatch(sendMessageCreator())
//     // }
//     // let newMessageChange = (body) => {
//     //     props.store.dispatch(updateNewMessageBodyCreator(body))
//     //
//     // }
//
//     return (
//         <StoreContext.Consumer> {
//             (store) => {
//
//                 let state = store.getState().messagesPage;
//
//                 let onsendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 let newMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//
//                 }
//                 return (< Dialogs sendMessageCreator={onsendMessageClick} updateNewMessageBody={newMessageChange}
//                                   messagesPage={state}/>)
//             }
//         }
//
//         </StoreContext.Consumer>
//
//
//     );
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);