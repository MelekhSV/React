const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {

    dialogs: [
        {id: 1, name: 'dima'},
        {id: 2, name: 'Sveta'}
    ],
        messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'}
    ],
        newMessageText:' '
}


export const dialogReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageText = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageText;
        state.newMessageText = '';
        state.messages.push({id: 6, message: body})

    }
    return state;
}

export const sendMessageCreator = () => {
    return (
        {type: SEND_MESSAGE}
    )
}
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE
    , body:body})