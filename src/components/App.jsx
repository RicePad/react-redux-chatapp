import React, { Component } from 'react';
import Appbar from './Appbar';
import ChatInput from './ChatInput';
import GroupChat from './GroupChat'

class App extends Component {
    
    render(){
        return(
            <section>
                <h1>Hello World from App Component</h1>
                <Appbar />
                <ChatInput />
                <GroupChat />
            </section>
            );
        
    }
}

export default App;