import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";

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
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

//router로부터 받은 toggledark의 형을 지정
interface ICoinsProps {}

function Coins({}: ICoinsProps) {
  //사전에 정해둔 state를 설정할 수 있음
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  //key value로 지정
  //react query가 api.ts를 수행하여 data에 저장
  //isLoading은 그냥 fetch가 완료되었는가
  //react query는 기존 방식과 다르게 데이터를 보존하기 때문에 뒤로 이동하였을때 로딩이 필요없음
  //data를 받아 fetchcoin에 저장
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  // //타입스크립트에게 배열로 오는 것을 알려줘야함
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // //loading상황에 loading메세지 출력을 위한 준비
  // const [loading, setLoading] = useState(true);

  // //컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있도록 하는 hook
  // useEffect(() => {
  //   //함수를 바로 실행하는 꿀팁
  //   (async () => {

  //     //100개만 잘라서 가져오기
  //     setCoins(json.slice(0, 100)) ;
  //     setLoading(false);
  //   })();
  // }, []);
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Header>

      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
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
