import React, { Component } from 'react';
// import Conversation from 'chat-template/dist/Conversation';




class GroupChat extends Component {
    constructor(props){
        super(props);
        
        let messages = [{
                        message:'How do I use this messaging app?',
                        from: 'right',
                        backColor: '#3d83fa',
                        textColor: "white",
                        avatar: 'https://www.seeklogo.net/wp-content/uploads/2015/09/google-plus-new-icon-logo.png',
                        duration: 2000,
                        inbound:true
                        }];
        this.state = {
            messages: messages
        };
    }
    render(){
        return(
            <div>
                GroupChat Messages
            </div>
            );
        
    }
}

export default GroupChat;