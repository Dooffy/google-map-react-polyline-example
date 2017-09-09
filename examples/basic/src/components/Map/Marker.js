import React, { Component } from 'react'

export default class Marker extends Component {
  render () {
    return (
      <div style={{width: '1.5rem', background: '#00a1e1', color: '#ffffff', padding: '0.3rem'}}>
        {this.props.text}
      </div>
    )
  }
}
