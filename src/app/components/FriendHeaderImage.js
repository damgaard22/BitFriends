import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const headerImageStyle = {
    marginBottom: '5%',
    marginTop: '10%',
}

class FriendHeaderImage extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Header as='h3' textAlign="center" style={headerImageStyle}>
        <Image circular size='huge' src={this.props.recipient.image} />
        {' '}{this.props.recipient.name}
      </Header>
    )
  }
}

export default FriendHeaderImage
