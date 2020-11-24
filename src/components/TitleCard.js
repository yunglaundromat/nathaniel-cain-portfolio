import React, { Component, Fragment } from 'react'
import { Header, Image } from 'semantic-ui-react'

class TitleCard extends Component {
  render() {
    return(
      <Fragment>
        <br></br>
        <Header as='h1'>
          <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Nathaniel Cain
        </Header>
      </Fragment>
    )
  }
}

export default TitleCard;
