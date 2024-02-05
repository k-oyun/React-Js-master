import React, { useState } from "react";
import styled from "styled-components";



//두개의 const에서는 사전에 정의한 것을 사용해야함
const Container = styled.div`
  background-color: ${(props => props.theme.bgColor)};
`;
const H1 = styled.h1`
  color:${(props)=> props.theme.textColor};
`;

function App() {

  return (
    <div>
      <Container>
        <H1>protected</H1>
      </Container>
    </div>
  );
}

export default App;
