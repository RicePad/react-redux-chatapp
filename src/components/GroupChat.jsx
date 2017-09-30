import React, { Component } from 'react';
import { deleteMessage } from '../actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';





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
            
        <ul classNameName="conversation">    
      {
          messages.map(text => {
              return (
                  <li>{text.message}<div onClick={() => this.deleteMessage(text.message)}> &#x2715;</div></li>
                  );
          })
          
      }
      </ul>
        );
    }
    s
    deleteMessage = (message) => {
        this.props.deleteMessage(message);
        
    }
    
    
    render(){
        return(
            <div classNameName="groupChatContainer">
                <span classNameName="menu">
                    <h4 className="group-title"><b>GroupChat Messages</b></h4>
                    <section className="conversation " height={400} style={{width: 400}} messages={this.state.messages}>
                            {this.renderMessages()}    
       
            
                                    
                    </section>
                </span>
                
            </div>
            );
        
    }
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators( deleteMessage, dispatch)
});

export default connect(null, mapDispatchToProps)(GroupChat);