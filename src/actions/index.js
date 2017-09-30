export const POST_MESSAGES = "POST_MESSAGES";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const postMessage = (message, avatar) => ({
    type: POST_MESSAGES, 
    message,
    avatar
    
})


export const deleteMessage = (message) =>{
    return {
        type: DELETE_MESSAGE,
        message
        
    };
};