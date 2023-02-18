import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <div>
          <Logo>CrowdFunding</Logo>
    </div>
  );
}

const Logo = styled.h1`
    font-weight: bold;
    font-size: 30px;
    margin-left: 10px;
    font-family: 'poppins';
`;

export default HeaderLogo
