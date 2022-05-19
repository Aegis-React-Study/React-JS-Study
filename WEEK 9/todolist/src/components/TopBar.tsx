import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background-color: #3376d0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  -webkit-box-shadow: 0px 8px 32px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 8px 32px -5px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 99;
  top: 0;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  text-transform: uppercase;
  color: #fafafa;
`;

const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo>ToDo</Logo>
      </LogoContainer>
    </Wrapper>
  );
};

export default TopBar;
