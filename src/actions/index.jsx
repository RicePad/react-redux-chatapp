export const SELECT_USER = "SELECT_USER";

export const selectUser = (user) => {
    console.log("you clicked on an user", user.first);
    return {
        type: SELECT_USER,
        payload: user
        
    };
    
}