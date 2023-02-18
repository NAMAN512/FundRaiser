import styled from 'styled-components';
import HeaderLogo from './components/HeaderLogo';
import HeaderNav from './components/HeaderNav';
import HeaderRight from './components/HeaderRight';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderLogo />
        <HeaderNav />
        <HeaderRight />
      </HeaderWrapper>
    </div>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Header;
