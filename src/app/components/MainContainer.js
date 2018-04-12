import React from 'react';
import { Container, Header, Image } from "semantic-ui-react";
import FriendHeaderImage from './FriendHeaderImage';
import TransactionForm from './TransactionForm';

const midContainerStyle = {
    marginTop: '15%',
}

class MainContainer extends React.Component {

    constructor (props) {
        super(props)
    }
    
    render () {
        return (
            <Container style={midContainerStyle}>
                <Header textAlign='center' as='h1'>
                    BitFriends   
                </Header>
                <div>
                    <FriendHeaderImage />
                </div>
                <div>
                    <TransactionForm />
                </div>
            </Container>
        )
    }
}

export default MainContainer