import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserList extends Component {
    constructor(props){
        super(props);
    }
    
    renderUserList(){
        return 
        
    }
    
    
    
    render(){
        console.log('this.props.users.first', this.props.users);
        return(
            <h1>UserList Container</h1>
            );
        
    }   
    
}


function mapStateToProps(state){
    return {
        users: state.users
        
    };
    
}

export default connect(mapStateToProps)(UserList);