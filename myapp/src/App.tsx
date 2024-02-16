import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  //reference 생성
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      {/* 레퍼런스 연결 */}
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          //마우스를 놓으면 원래 위치로 돌아가도록
          dragSnapToOrigin
          //마우스 포인터를 정확히 당기도록 (마우스로 당기는 힘 ==elastic)
          dragElastic={1}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
