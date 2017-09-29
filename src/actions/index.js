export const POST_MESSAGES = "POST_MESSAGES";


export const postMessage = (message, avatar) => ({
    type: POST_MESSAGES, 
    message,
    avatar
    
})