import React from 'react'
import { Image, Card, Header } from 'semantic-ui-react'

const imageStyle = {marginRight: '15px',}
const subHeaderStyle = {textAlign: 'center'}

class CardFriendList extends React.Component {

    constructor (props) {
        super(props)
    }

    handleCardClick(key) {
        this.props.cardProps.friendCallback(key)
    }

  render() {

        const Cards = this.props.cardProps.friendProps.map((props) =>
            
            <Card key={props.friend_id} onClick={() => this.handleCardClick(props.friend_id)}>
                <Card.Content>
                <Header as='h3'>
                    <Image circular src={props.image_url} style={imageStyle}/>
                    {' '}{props.friend_name}
                    <Header.Subheader style={subHeaderStyle}>
                        {props.friend_description}
                    </Header.Subheader>
                </Header>
                </Card.Content>
            </Card>
        );

        return (
            <ul>{Cards}</ul>
        );
    }
}

export default CardFriendList
