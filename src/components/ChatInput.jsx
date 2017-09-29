import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class ChatInput extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            messageValue: ''
        };
    }
    
    handleChatMessage(event){
        this.setState({ messageValue: event.target.value});
    }
    
    handlePostClick(event){
        console.log('button clicked!')
        this.props.actions.postMessage(this.state.messageValue,"http://res.cloudinary.com/technoetics/image/upload/v1491538348/technoetics/profilepenguin.png")
    }
    
    componentWillReceiveProps(nextProps){
        // console.log("nextpoprs in vahtinupt",nextProps);
    }
    
    
    render(){
        return(
           <div>
            User 1
            <br/>
            <input
                type="text"
                className="messageValueInput"
                id="messageValueInput"
                name="messageValueInput"
                key="messageValueInput"
                value={this.state.messageValue}
                onChange={(event) => {this.handleChatMessage(event)}}
            />
            <br />
            <Button bsStyle="primary" onClick={(event) => this.handlePostClick(event)}> Send Message</Button>
           </div>
           
            );
        
    }
}

export default ChatInput;