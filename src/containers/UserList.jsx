import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions';


class UserList extends Component {
    constructor(props){
        super(props);
    }
    
    renderUserList(){
        return this.props.users.map((user) => {
           return (
               <li 
               onClick={() => this.props.selectUser(user)}
               key={user.id}> {user.first} {user.last}</li>
               );
        });
        
    }
    
    
    
    render(){
        console.log('this.props.users.first', this.props.users && this.props.last);
        return(
            <ul>
                {this.renderUserList()}
            </ul>
            );
        
    }   
    
}


function mapStateToProps(state){
    return {
        users: state.users
        
    };
    
}

export default connect(mapStateToProps, {selectUser})(UserList);