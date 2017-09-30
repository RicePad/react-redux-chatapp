import { POST_MESSAGES, DELETE_MESSAGE } from '../actions';

const initialState = [{
    message: 'How do I use this messaging app?',
    from: 'right',
    backColor: '#3d83fa',
    textColor: "white",
    avatar: 'http://res.cloudinary.com/technoetics/image/upload/v1491538348/technoetics/profilepenguin.png',
    duration: 2000,
    inbound: true
}];


const removeById = (state=[], message) => {
    const messages = state.filter(message => message !==message)
    return messages
}


export default function chatOperations(state = initialState, action) {
    let messages = null;
    switch (action.type) {
        case POST_MESSAGES:
            return [
                ...state,
                {
                    message: action.message,
                    from: 'right',
                    backColor: "green",
                    textColor: "white",
                    avatar: action.avatar,
                    duration: 2000,
                    inbound: false
                }
                
               
            ]
             case DELETE_MESSAGE:
                   messages = removeById(state, action.message)
                   return messages
        default:
            return state
    }
}
