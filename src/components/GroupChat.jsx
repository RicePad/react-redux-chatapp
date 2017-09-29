import React, { Component } from 'react';





class GroupChat extends Component {
    constructor(props){
        super(props);
        console.log("propsItems", this.props.messageItems);

       
        this.state = {
            messages: this.props.messageItems
        };
    }
    
    componentWillReceiveProps(nextProps) {
        // console.log("nextProps", nextProps);
        this.setState({ messages: nextProps.messageItems });
    }
    
    
    renderMessages = (key, id) => {
        const messages = this.state.messages;
        
        return (
            
        <ul className="conversation">    
      {
          messages.map(text => {
              return (
                  <li>{text.message}</li>
                  );
          })
          
      }
      </ul>
        );
    }
    
    
    
    render(){
        return(
            <div className="groupChatContainer">
                <span className="groupChatText">
                    <h4 ><b>GroupChat Messages</b></h4>
                    <section  >
                            {this.renderMessages()}    
                            
                    </section>
                </span>
                
            </div>
            );
        
    }
}

export default GroupChat;