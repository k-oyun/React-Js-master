import styled from "styled-components";


interface ContainerProps {
    bgColor: string;
    borderColor: string;
}


const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    //?를 붙임으로써 optional하게 app으로 prop을 보냄
    borderColor?: string;
  }

// ??를 사용함으로써 bordercolor의 default를 bgColor로 사용 
function Circle({ bgColor,borderColor}: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;