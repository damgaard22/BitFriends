import React from 'react';
import { Card, Header, Icon, Container, Modal } from 'semantic-ui-react';


class TransactionList extends React.Component {

    constructor (props) {
        super(props)
        this.state = {modalOpen: false}
        console.log(this.props)
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })


    handleTransactionClick = (id) => {
        this.handleOpen()
    }

    render() {
        
        const subStyle = {
            textAlign: 'center',
        }
    
        const transaction_props = props['props'];

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
                    basic
                    size='small'
                >
                    <Header icon='browser' content='Cookies policy' />
                    <Modal.Content>
                    <h3>This website uses cookies to ensure the best user experience.</h3>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Got it
                    </Button>
                    </Modal.Actions>
                </Modal>
            </Container>
        );
    }
}

export default TransactionList
