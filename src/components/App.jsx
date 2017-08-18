/*global fetch*/
import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import Profile from '../components/Profile'
import Gallery from '../components/Gallery'




class App extends Component  {
    constructor(props){
        super(props);
        
        this.state = {
          query: '',
          artist: null,
          tracks: []
            
        };
        
    }
    
    
    search(){
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query
                            + '&type=artist&limit=1';
                            
        var accessToken = 'AQDQxc_s007FjkYvTU7aiGMVYklcT-iWjSFZ8DN_21V0Dg4JvHsKoe3-QG1XmOqq09rHt-vy1JpqzQ7gcwcrZXCPDwpohCLP0Lhw7bti3d80AhnjbW6p6qQilhuS7udA3qDKK6tQw2DoUUqcAR8-mYG1GxtVb9Hw7k_sYyi-QEM_vckSVVF-HbOGKetQUB0LbYcWuGZdrOu0UpHiyo3ir5VFP3OCS4PWECj63Zgv2ciUoiTEKXyNZfVechpc5gYxuAYumgJLxSupetk&state=iL74EWIReTuPRa4y'
        
        var myOptions = {
              method: 'GET',
              headers: {
                  'Authorization':'Bearer ' + accessToken
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
                  this.search();
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
       <Gallery 
        tracks={this.state.tracks}
       
       />
      </div>
      </div>
    );
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
