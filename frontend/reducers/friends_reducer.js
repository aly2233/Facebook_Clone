// import { RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friend_actions";

// const friendsReducer = (state = {}, action) => {
//     Object.freeze(state);
//     let nextState = Object.assign({}, state);
    
//     switch(action.type) {
        
//         case RECEIVE_FRIEND:
//             nextState[Object.keys(action.friends)] = Object.values(action.friends)[0]
//             nextState[Object.keys(action.friendship.user)] = Object.values(action.friend.user)[0]
//             return nextState;
//         case REMOVE_FRIEND:
//             delete nextState[Object.keys(action.friend.friend)]
//             delete nextState[Object.keys(action.friend.user)]
//             return nextState;
//         default:
//             return state;
//     }
// }

// export default friendsReducer;

import { RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_ALL_FRIENDS } from '../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:
            return Object.assign(nextState, action.friends)
        case RECEIVE_USER:
            return Object.assign(nextState, action.user.friends)
        case RECEIVE_FRIEND:
            nextState[Object.keys(action.friend.friend_to_user)] = Object.values(action.friend.friend_to_user)[0]
            nextState[Object.keys(action.friend.user_to_friend)] = Object.values(action.friend.user_to_friend)[0]
            return nextState;
        case REMOVE_FRIEND:
            delete nextState[Object.keys(action.friend.friend_to_user)]
            delete nextState[Object.keys(action.friend.user_to_friend)]
            return nextState;
        default:
            return state;
    }
}

export default friendsReducer