import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

export const getFriends = () => {
    const friendsEndpoint = 'http://localhost:5000/friends';
    const friends = axios.get(friendsEndpoint);

    return {
        type: GET_FRIENDS,
        payload: friends,
    };
};

export const addFriend = () => {
    const updateFriend = axios.put('http://localhost:5000/update-friend');

    return {
        type: UPDATE_FRIEND,
        payload: updateFriend,
    };
};

// app.put('/update-friend', (req, res) => {
// 	const index = req.body.index;
// 	friends[index] = req.body.update;
// 	res.send(friends);
// });