import React, { Component } from 'react';


class App extends Component  {
    
    render(){
        return (
        <div className="App">
            <div className="App-title">SpotiMusic </div>
            <div>
                <input placeholder="search for artist...."/>
                <button>Search</button>
            </div>
            <div className="Profile">
                <div>Artist Picture</div>
                <div>Artist Name</div>
            </div>
            <div className="Image-gallery">
                gallery
            </div>
            
        </div>
            
            
            );
            
            
        
    }
    
}

export default App;
