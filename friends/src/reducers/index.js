import { combineReducers } from 'redux';
import { GET_FRIENDS, UPDATE_FRIEND } from '../actions';

const friendsReducer = (friends = [], action, newFriends = []) => {
    switch(action.type) {
        case GET_FRIENDS:
            return action.payload.data;
        case UPDATE_FRIEND: 
            return friends.push(newFriends);
        default:
            return friends;
    }
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;