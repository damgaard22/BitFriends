import React from 'react';
import {Card, Header, Icon} from 'semantic-ui-react';


function TransactionList (props) {

    const subStyle = {
        textAlign: 'center',
    }

    const transaction_props = props['props'];

    console.log(JSON.stringify(transaction_props.reverse()))



    const Transactions = transaction_props.reverse().map((props) =>
        
        <Card key={props.transaction_id}>
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
        <ul>{Transactions}</ul>
    );
}

export default TransactionList
