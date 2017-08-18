/*global fetch*/
import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import Profile from '../components/Profile'



class App extends Component  {
    constructor(props){
        super(props);
        
        this.state = {
          query: '',
          artist: null
            
        };
        
    }
    
    
    search(){
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query
                            + '&type=artist&limit=1';
                            
        var accessToken = 'AQBo4_vAFqU20T2QKQigP-69odlFAJHhrC--yFC-0Pn2-2PktLkn8EeWzUdsf-B5GcPQfF5bFjzFRBmbFaGVdtV3vxuIMdkRAcZ49BDwgJwElBaWjvZ8UrPz8N8c5kq_ftHRbwKyU1OH7n0CUNc-rQ_HXGNQ28ZlWHjdWQvAUVCQ_ElWWLBUiPqjpRxyhKGBxGNw5fUcteSIwPxp046uzBt_NrQkpyJoFlD4x7shac6I-POy7I5U0i9LB2nH78SYfUOjpl2I6MLO_kw&state=YMyB9PEi94Kt7yjw'
        
        var myOptions = {
              method: 'GET',
              headers: {
                  'Authorization':'Bearer' + accessToken
              },
              mode: 'cors',
              cache: 'default'
    };
             
        console.log('FETCH_URL', FETCH_URL);
        
        fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => console.log(json))

  }
  render(){
    let artist = {
      name: '',
    //   followers: {
    //     total: ''
    //   }
    };
    if (this.state.artist !== null){
      artist = this.state.artist;
    }

    return(
      <div className="App">
        <div className="App-title"> Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value = {this.state.query}
              onChange = {event => {this.setState({query: event.target.value})}}
              onKeyPress = {event => {
                if (event.key === 'Enter'){
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick = {() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      <div className="Profile">
        <div>Artist Picture</div>
        <div>Artist Name</div>
      </div>
      <div className="Gallery">
        Gallery
      </div>
      </div>
    )
  }
}

export default App;
        
        
        
        
        
//         fetch(FETCH_URL,{
//             method: 'GET'
            
//         })
//         .then(response => response.json())
//         .then(json => {
//             const artist = json.artist.items[0];
//             console.log('artist', artist);
//             this.setState({artist});
            
//         });
            
        
        
//     }
    
//     render(){
//         return (
//         <div className="App">
//             <div className="App-title">SpotiMusic </div>
//             <FormGroup>
//                 <InputGroup>
//                     <FormControl
//                         type="text"
//                         placeholder="Search for an artist.."
//                         value={this.state.query}
//                         onChange={event => {this.setState({query: event.target.value})}}
//                         onKeyPress={ event =>{
//                             if (event.key === 'Enter'){
//                                 this.search();
                                
//                             }
                            
//                         }
                        
                            
//                         }
                        
//                     />
//                     <InputGroup.Addon onClick={() => this.search()}>
//                         <Glyphicon glyph="search"> </Glyphicon>
//                     </InputGroup.Addon>
//                 </InputGroup>
//             </FormGroup>
//             <Profile
//                 artist={this.state.artist}
//             />
            
//             <div className="Image-gallery">
//                 gallery
//             </div>
            
//         </div>
            
            
//             );
            
            
        
//     }
    
// }

// export default App;
