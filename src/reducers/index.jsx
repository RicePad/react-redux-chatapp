import {combineReducers} from 'redux';
import UserData from './UserData';
import ActiveUser from './ActiveUser';

export default combineReducers({
   users: UserData, 
   activeUser: ActiveUser
    
});
