import React from 'react'
import styled from 'styled-components';
import Header from './Header';


export class Layout extends React.Component {
  render() {
    return (
      <div className="Layout height-100vh grid grid-template-rows-header-content">
        <Header />
        <div className="Layout-inner overflow-auto">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout