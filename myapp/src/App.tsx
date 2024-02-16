import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
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
  //useEffect와 같이 사용해야 확인할 수 있음
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);
  return (
    <Wrapper>
      {/* set함수를 써서 버튼 클릭시 컴포넌트의 위치를 수정할 수 있음 */}
      <button onClick={() => x.set(200)}>click me</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
