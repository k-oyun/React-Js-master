import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

function App() {
  //x를 지속적으로 추적
  //컴포넌트가 움직이더라도 재렌더링하지않음 -> 성능향상
  const x = useMotionValue(0);

  //범위를 정해두면 그범위로 출력하는 것이 아닌 직접 지정한 상수값 범위에서 추적이 가능
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  //useEffect와 같이 사용해야 확인할 수 있음
  useEffect(() => {}, [x]);
  return (
    <Wrapper>
      <Box style={{ x, scale: potato }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
