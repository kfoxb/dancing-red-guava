import React, { Component } from 'react';
import styled from 'styled-components';
import DancingGuava from './DancingGuava';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

class SingleDancingGuava extends Component {
  render() {
    return (
      <Container>
        <div>
          <DancingGuava />
        </div>
      </Container>
    );
  }
}

export default SingleDancingGuava;
