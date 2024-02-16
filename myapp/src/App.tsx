import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
const Wrapper = styled(motion.div)`
  height: 200vh;
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

  //-800~800으로이동시 컴포넌트를 360도 돌림
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  //useEffect와 같이 사용해야 확인할 수 있음
  useEffect(() => {}, [x]);

  //-800~800을 이동하면 백그라운드 색상이 변함
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 8, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );

  //scroll을 내려갈수록 박스가 작아짐
  const { scrollYProgress } = useViewportScroll();

  //지정범위에따라 박스의 크기가 달라짐
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
