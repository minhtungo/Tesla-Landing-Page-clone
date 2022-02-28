import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { selectCars } from '../features/cars/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a href='/' style={{ marginLeft: '32px' }}>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <Link key={index} href='/'>
              {car}
            </Link>
          ))}
      </Menu>
      <RightMenu>
        <Link href='/'>Shop</Link>
        <Link href='/'>Account</Link>
        <CustomMenu onClick={() => setBurgerStatus(true)}>Menu</CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href='/'>Existing Inventory</a>
        </li>
        <li>
          <a href='/'>Used Inventory</a>
        </li>
        <li>
          <a href='/'>Trade-in</a>
        </li>
        <li>
          <a href='/'>Test Drive</a>
        </li>
        <li>
          <a href='/'>Power Wall</a>
        </li>
        <li>
          <a href='/'>Energy</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;

  a {
    font-weight: 600;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;
const Link = styled.a`
  padding: 4px 8px !important;
  margin: 0 8px;
`;
const CustomMenu = styled.span`
  cursor: pointer;
  font-weight: 600;
  margin: 0 8px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    padding: 15px 0;

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(MdClose)`
  cursor: pointer;
`;
