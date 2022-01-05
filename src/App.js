import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotate360 = keyframes`
  0% {
    transform: rotate(0);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate360} 5s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>💚</Emoji>
      </Box>
    </Wrapper>
  );
}
export default App;
