import { useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//타입스크립트에게 알려주기
interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}

function Coin() {
  //파라미터를 가져와 return
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  //coins에서 보낸 state를 받음
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading.."}</Title>
      </Header>

      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
