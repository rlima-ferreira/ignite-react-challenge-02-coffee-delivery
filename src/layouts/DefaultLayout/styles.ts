import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { ButtonMd } from '../../components/base/Button';

export const Header = styled.header`
  position: relative;
  height: 6.5rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;
    position: fixed;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

    background-color: ${(props) => props.theme.colors.white};
  }
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;

  img {
    width: 5.313rem;
    /* height: 2.5rem; */
    object-fit: cover;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationButton = styled(ButtonMd)`
  color: ${(props) => props.theme.colors.purpleDark};
  background-color: ${(props) => props.theme.colors.purpleLight};
`;

export const CartButton = styled(NavLink)`
  color: ${(props) => props.theme.colors.yellowDark};
  background-color: ${(props) => props.theme.colors.yellowLight};
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
  line-height: 160%;
  font-size: 0.75rem;

  &:hover {
    color: ${(props) => props.theme.colors.yellowLight};
    background-color: ${(props) => props.theme.colors.yellowDark};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -0.5rem;
    margin-right: -0.5rem;
    font-weight: bold;
    font-size: 0.75rem;

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.yellowDark};
  }
`;
