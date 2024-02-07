import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  //전부라는 의미
  a {
    display: flex;
    padding: 20px;
    transition: color 0.2s ease-in;
    align-times: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

//style 적용
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height 35px;
  margin-right: 10px;
`;
//타입스크립트에게 어떻게 오는지 알려줘야함
//받아오는 api를 타입스크립트가 이해할 수 있게 지정
interface CoinInterface {
  id: "string";
  name: "string";
  symbol: "string";
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  //타입스크립트에게 배열로 오는 것을 알려줘야함
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  //loading상황에 loading메세지 출력을 위한 준비
  const [loading, setLoading] = useState(true);

  //컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 hook
  useEffect(() => {
    //함수를 바로 실행하는 꿀팁
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      //100개만 잘라서 가져오기
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  //state를 받아 api를 계속 받지 않고 state로 사용
                  state: { name: coin.name },
                }}
              >
                <img
                  src={`https://coinicons-api.vercel.app/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
