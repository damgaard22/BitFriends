import React, { Component } from 'react';
import {Button, Dimmer, Form, Image, Segment } from 'semantic-ui-react';


const divStyle = {
    marginLeft: '30.5%',
    width: '70%',
    marginBottom: '10%',
    marginTop: '10%'
    
}

const iconStyle = {
    marginLeft: '5%',
    marginRight: '5%',
    width: '70px',
    height: '70px'
}

const messageStyle = {
    marginLeft: '50%'
}

const amountStyle = {
    marginLeft: '112%',
    marginTop: '10%',
    marginBottom: '5%'
}

const sendButton = {
    marginTop: '10%',
    width: '20%',
    marginLeft: '40%'
}

class TransactionForm extends Component {

    constructor (props) {
        super(props)
    }
    
    state = {amount: '', coin: 'btc', description: '', btc_color: 'orange', eth_color: 'black'};

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleCoinChange = (e, { className }) => {
        if (className === 'btc') {
            this.setState({coin: 'btc', btc_color: 'orange', eth_color: 'grey'})
        }
        else {
            this.setState({coin: 'eth', btc_color: 'grey', eth_color: 'black'})
        }
    }

    handleFormSubmit = () => {
        const { amount, coin, description } = this.state

        this.props.transactionCallback(coin, amount, description)

        this.setState({amount: '', coin: '', description: '', btc_color: 'orange', eth_color: 'black'})
    }

    render() {
        const { amount, coin, description, btc_color, eth_color } = this.state

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input placeholder='Amount' name='amount' value={amount} onChange={this.handleChange} width={5} style={amountStyle}/>
                <div style={divStyle}>
                    <Button size='huge' circular color={btc_color} icon='bitcoin' onClick={this.handleCoinChange} style={iconStyle} className='btc'/>
                    <Button size='huge' circular color={eth_color} icon='viacoin' onClick={this.handleCoinChange} style={iconStyle} className='eth'/>
                </div>
                <Form.Input placeholder='Transaction Message' name='description' value={description} onChange={this.handleChange} style={messageStyle} width={8}/>
                <Form.Button basic onClick={this.handleFormSubmit} color='blue'style={sendButton}>Send</Form.Button>
            </Form>
        )
    }
}

export default TransactionForm