import React, { Component } from 'react';


class Profile extends Component {
  
     render(){
        
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []};
   
    if(this.props.artist !== null){
        artist = this.props.artist;
        
    }
        
        
        
        return(
            <div className="profile">
            <img src="https://static2.playtech.ro/wp-content/uploads/2017/05/spotify-romania-muzica-on-demand.jpg"
            
            
                alt="Profile"
                className="profile-img"
                // src={artist.image[0].url}
            
            />
            <div className="profile-info">
            
                <div className="profile-name">{artist.name} Artis Name</div>
                <div className="profile-followers">{artist.followers.total} 100,000 followers</div>
                <div className="profile-genres">
                    {
                        artist.genres.map((genre, k) => {
                            genre = genre !== artist.genre[artist.genres.length-1] ? `${genre}, ` : ` & ${genre}`;
                            return (
                                <span key={k}>{genre}</span>
                            );
                            
                        }
                        
                        )
                        
                        
                        
                    }
                
                
                </div>
            
            </div>
                
            </div>
            );
        
    }
    

}

export default Profile;
