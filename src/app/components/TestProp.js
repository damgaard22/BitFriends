import React from 'react';
import { Container, Header, Image } from "semantic-ui-react";
import FriendHeaderImage from './FriendHeaderImage';
import TransactionForm from './TransactionForm';

const midContainerStyle = {
    marginTop: '15%',
}

class TestProp extends React.Component {
    
    constructor (props) {
        super(props)
    }

    render() {
        return(
            <Container style={midContainerStyle}>
                <Header textAlign='center' as='h1'>
                    BitFriends   
                </Header>
                <div>
                    <FriendHeaderImage recipient = {this.props.recipient.recipientProps}/>
                </div>
                <div>
                    <TransactionForm transactionCallback = {this.props.recipient.transactionCallback}/>
                </div>
            </Container>
        )
    }
}

export default TestProp