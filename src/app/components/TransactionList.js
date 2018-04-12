import React from 'react';
import { Card, Header, Icon, Container, Modal, Button } from 'semantic-ui-react';


class TransactionList extends React.Component {

    constructor (props) {
        super(props)
        this.state = {transactionId: 0, modalOpen: false}
        console.log(this.props)

    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })


    handleTransactionClick = (id) => {
        this.setState({transactionId: id})
        this.handleOpen()
        console.log(this.state)
    }

    render() {
        
        const subStyle = {
            textAlign: 'center',
        }

        const headStyle = {
            textAlign: 'center',
            marginBottom: '2%',
        }
    
        const transaction_props = this.props['props'];

        const Transactions = transaction_props.map((props) =>
            
            <Card key={props.transaction_id} onClick={() => this.handleTransactionClick(props.transaction_id)}>
                <Card.Content>
                    <Header as='h3'>
                        <Icon circular name="bitcoin" color='orange'/>
                        <Header.Content>
                            {props.recipient}
                        </Header.Content>
                        <Header.Subheader style={subStyle}>
                            {props.amount_sent} {props.coin_sent}
                        </Header.Subheader>
                    </Header>
                </Card.Content>
            </Card>
        );


        return (
            <Container>
                <ul>{Transactions}</ul>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                >
                    <Modal.Content>
                        <Header style={headStyle}> {transaction_props[this.state.transactionId].recipient} </Header>
                    </Modal.Content>
                    <Modal.Content>
                        <Header as='h5' style={subStyle}> {transaction_props[this.state.transactionId].description}</Header>
                        <Header as='h5' style={subStyle}> {transaction_props[this.state.transactionId].amount_sent}  {transaction_props[this.state.transactionId].coin_sent} </Header>
                        <Header as='h5' style={subStyle}> {transaction_props[this.state.transactionId].address} </Header>
                    </Modal.Content>
                </Modal>
            </Container>
        );
    }
}

export default TransactionList
