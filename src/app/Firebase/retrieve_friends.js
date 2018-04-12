import firebase from './firebase_client'

function retrieveFriends() {
    firebase.get('friends.json')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });

}

export default retrieveFriends