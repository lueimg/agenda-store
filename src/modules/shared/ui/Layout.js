import React from 'react'
import styled from 'styled-components';
import Header from './Header';

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;


export class Layout extends React.Component {
  render() {
    return (
      <MainLayout className="main-layout">
        <Header/>
        <div className="content flex flex-column flex-grow-1">
          {this.props.children}
        </div>
      </MainLayout>
    )
  }
}

export default Layout