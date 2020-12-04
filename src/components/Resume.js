import React, { Component } from 'react'
import { Document } from 'react-pdf'

class Resume extends Component {

  componentDidMount() {
    console.log("resume!")
  }

  render() {
    return (
      <div>
        <Document file="resume.pdf" />
      </div>
    )
  }
}

export default Resume;
