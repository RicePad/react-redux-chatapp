import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap '



class App extends Component  {
    
    render(){
        return (
        <div className="App">
            <div className="App-title">SpotiMusic </div>
            <FormGroup>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Search for an artist.."
                    />
                    <InputGroup.Addon>
                        <Glyphicon glyph="search"> </Glyphicon>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
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
