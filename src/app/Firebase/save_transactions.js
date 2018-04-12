import firebase from './firebase_client'

function saveTransactions(transactions) {  
    
    firebase.put('transactions.json', transactions)
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}

export default saveTransactions