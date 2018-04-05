import React, { Component } from 'react';
import CardFriendList from "./components/CardFriendList";
import MainContainer from './components/MainContainer';
import TestProp from './components/TestProp';
import friends from "./data/Friends";
import transactions from './data/Transactions';
import TransactionList from './components/TransactionList';
import { Rail, Grid, Button, Header} from 'semantic-ui-react';
import random_image from './data/RandomProfiles'
import AddFriendButton from './components/AddFriendButton'

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

        this.state = {friends: friends, transactions: transactions, recipient: {name: 'Patrick', image: 'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'}}

        this.handleAddFriend = this.handleAddFriend.bind(this)
        this.handleChangeRecipient = this.handleChangeRecipient.bind(this)
        this.handleAddTransaction = this.handleAddTransaction.bind(this)
    }

    handleAddFriend(friend_name, friend_description) {
        const newFriend = {
            friend_name: friend_name,
            friend_description: friend_description,
            image_url: random_image(),
            friend_id: friends.length
        }

        friends.push(newFriend)
        this.setState({friends: friends})
    }

    handleChangeRecipient(friend_id) {
        const name = this.state.friends[friend_id].friend_name
        const image = this.state.friends[friend_id].image_url
        this.setState({recipient: {name: name, image: image}})
    }

    handleAddTransaction(coin, amount) {
        console.log(this.state)
        const newTransaction = {
            coin: coin,
            amount: amount,
            recipient: this.state.recipient.name,
            transaction_id: transactions.length
        }

        transactions.push(newTransaction)
        this.setState({transactions: transactions})
    }
    
    
    componentWillMount() {
        //console.log(JSON.stringify(this.state))
    }

    render() {

        const CardProps = {friendProps: this.state.friends, friendCallback: this.handleChangeRecipient}
        const ContainerProps = {recipientProps: this.state.recipient, transactionCallback: this.handleAddTransaction}

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