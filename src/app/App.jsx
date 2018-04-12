import React, { Component } from 'react';
import CardFriendList from "./components/CardFriendList";
import MainContainer from './components/MainContainer';
import TestProp from './components/TestProp';
import transactions from './data/Transactions';
import TransactionList from './components/TransactionList';
import { Rail, Grid, Button, Header} from 'semantic-ui-react';
import random_image from './data/RandomProfiles';
import AddFriendButton from './components/AddFriendButton';
import saveFriends from './Firebase/save_friends';
import saveTransactions from './Firebase/save_transactions';
import retrieveFriends from './Firebase/retrieve_friends';
import firebase from './Firebase/firebase_client';


//Column Styles

const leftStyle = {
    marginRight: '10%', 
    marginTop: '35%',
}

const rightStyle = {
    marginTop: '35%'
}

const leftHeaderStyle = {
    marginLeft: '10%',
    marginBottom: '10%',
}

const rightHeaderStyle = {
    marginBottom: '10%',
    marginLeft: '10%',
}


class App extends React.Component{

    constructor(props) {
        super(props)

        this.state = {friends: [], transactions: transactions, recipient: {name: 'Patrick', image: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg', address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX'}}

        this.handleAddFriend = this.handleAddFriend.bind(this)
        this.handleChangeRecipient = this.handleChangeRecipient.bind(this)
        this.handleAddTransaction = this.handleAddTransaction.bind(this)
    }


    handleAddFriend(friend_name, friend_description, friend_address) {
        const friends = this.state.friends

        const newFriend = {
            friend_name: friend_name,
            friend_description: friend_description,
            image_url: random_image(),
            friend_id: friends.length,
            address: friend_address
        }

        console.log(newFriend)

        friends.push(newFriend)
        this.setState({friends: friends})
        saveFriends(this.state.friends)
    }

    handleChangeRecipient(friend_id) {
        const name = this.state.friends[friend_id].friend_name
        const image = this.state.friends[friend_id].image_url
        const address = this.state.friends[friend_id].address
        this.setState({recipient: {name: name, image: image, address: address}})
    }


    componentWillMount () {
       
        firebase.get('friends.json')
        .then(response => {
            const friends = response.data
            this.setState({friends: friends})
        })
        .catch(error => {
            console.log(error);
        });

        firebase.get('transactions.json')
        .then(response => {
            const transactions = response.data
            this.setState({transactions: transactions})
        })
        .catch(error => {
            console.log(error);
        });
    }

    handleAddTransaction(coin, amount, description) {
        console.log(this.state)
        const newTransaction = {
            coin_sent: coin.toUpperCase(),
            amount_sent: amount,
            recipient: this.state.recipient.name,
            transaction_id: transactions.length,
            description: description,
            address: this.state.recipient.address
        }

        if (transactions.length < 5) {
            transactions.push(newTransaction)
        }
        else {
            transactions.push(newTransaction)
            transactions.splice(0, 1)
            for (let i = 0; i < transactions.length; i++) {
                transactions[i].transaction_id -= 1
            }
        }

        this.setState({transactions: transactions})
        saveTransactions(this.state.transactions)
    }

    render() {

        const CardProps = {friendProps: this.state.friends, friendCallback: this.handleChangeRecipient}
        const ContainerProps = {recipientProps: this.state.recipient, transactionCallback: this.handleAddTransaction}

        console.log(this.state.transactions)

        return (
            <Grid centered columns={3} divided>
                <Grid.Column>
                    <TestProp recipient = {ContainerProps} />

                    <Rail position='left' style={leftStyle}>
                        <Header textAlign='center' style={leftHeaderStyle}>Friends</Header>
                        <CardFriendList cardProps = {CardProps}/>
                        <AddFriendButton handler = {this.handleAddFriend}/>
                    </Rail>

                    <Rail position='right' style={leftStyle}>
                        <Header textAlign='center' style={rightHeaderStyle}>Transactions</Header>
                        <TransactionList props = {this.state.transactions}/>
                    </Rail>

                </Grid.Column>                            
            </Grid>
        );
    }
};

export default App;