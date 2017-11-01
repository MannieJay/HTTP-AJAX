import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends, addFriend } from "../actions";
//import axios from "axios";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <input type="text" value={ this.inputFriend } onChange={ this.handleNewFriend } />
        <button onClick={ this.handleAddFriendToList }>Add Friend</button>
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <li key={i}>
                <p>{`Friend ${i + 1}`}</p>
                <p>{`Name: ${friend.name}`}</p>
                <p>{`Age: ${friend.age}`}</p>
                <p>{`Email: ${friend.email}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const handleNewFriend = (event, inputFriend ='') => {
    this.setState({ inputFriend: event.target.value });
  };
const handleAddFriendToList = () => {
    let name = this.name;
    const friends = this.friends;
    addFriend(this.inputFriend);
    this.setState({ friends, addFriend });
  };
console.log(handleAddFriendToList());
const mapStateToProps = state => {
  return {
    friends: state.friends,
//    inputFriend: '',
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);
