import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {authRedirectHoc} from "../../Hoc/authRedirect";
import {compose} from "redux";


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
        messagesPage: state.messagesPage,
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

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    authRedirectHoc
)(Dialogs)

//
// let AuthRedirectComponent = authRedirectHoc(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);




// let AuthRedirectComponent = (props) => {
//     if (this.props.isAuths === false) {
//         return <Redirect to={'/login'} />
//     };
//     return <Dialogs {...props}/>
// }