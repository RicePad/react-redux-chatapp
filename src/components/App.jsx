import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';


class App extends Component {
    
    render(){
        return(
            <section>
                <h1>User List</h1>
                <UserList />
                <hr/>
                <h1>User Detail</h1>
                <UserDetail />
            </section>
            );
        
    }   
    
}




export default App;