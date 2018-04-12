import React from 'react';
import { Modal, Button, Icon, Header, Image, Form } from 'semantic-ui-react';
import AddFriendModal from './AddFriendModal';

const modalButtonStyle = {
        marginLeft: '42.5%',
        marginRight: '42.5%',
        width: '15%',
        marginBottom: '10px',
        marginTop: '15px',
    }

const inputStyle = {
        marginLeft: '40.3%',
    }

class AddFriendButton extends React.Component {

    constructor (props) {
        super(props)
        this.state = {name: '', description: '', address: '', modalOpen: false}
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleFormSubmit = () => {
        const {name, description, address} = this.state

        this.props.handler(name, description, address)
        this.setState({name: '', description: '', address: ''})
        this.handleClose()
    }

    render() {
        
        const { name, description, address } = this.state

        return(
            <Modal trigger ={
                <Button icon='plus' inverted circular size='huge' color='green' style={buttonStyle} onClick = {this.handleOpen} />
            }
            open = {this.state.modalOpen}
            onClose = {this.handleClose}
            >
                <Modal.Header>Add a friend</Modal.Header>
                <Modal.Content image>
                    <Image circular centered wrapped size='small' src="https://react.semantic-ui.com/assets/images/avatar/large/rachel.png" />
                </Modal.Content>
                    <Form onSubmit={this.handleFormSubmit}>
                        <div style={inputStyle}>
                            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} width={5}/>
                            <Form.Input placeholder='Description' name='description' value={description} onChange={this.handleChange} width={5}/>
                            <Form.Input placeholder='Address' name='address' value={address} onChange={this.handleChange} width={5}/>
                        </div>
                        <Form.Button basic content='Add' style={modalButtonStyle}/>                    
                    </Form>
            </Modal>
        )
    }
   
}

const buttonStyle = {
    marginLeft: '45%',
    marginTop: '15px'
}

export default AddFriendButton