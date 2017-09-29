import React, { Component } from 'react';
import Appbar from './Appbar';
import ChatInput from './ChatInput';

class App extends Component {
    
    render(){
        return(
            <section>
            <h1>Hello World from App Component</h1>
            <Appbar />
            <ChatInput />
            </section>
            );
        
    }
}

export default App;