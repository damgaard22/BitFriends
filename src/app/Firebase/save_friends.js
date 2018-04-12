import firebase from './firebase_client'

function saveFriends(friends) {  
    
    firebase.put('friends.json', friends)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export default saveFriends