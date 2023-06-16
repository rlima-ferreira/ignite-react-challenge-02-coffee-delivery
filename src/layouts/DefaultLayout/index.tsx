import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { OrderContext } from '../../contexts/OrderContext';
import {
  Actions,
  CartButton,
  Header,
  LocationButton,
  LogoLink,
} from './styles';

export default function DefaultLayout() {
  const {
    order: { coffees },
  } = useContext(OrderContext);

  return (
    <>
      <Header>
        <nav>
          <LogoLink to="/">
            <img src={Logo} />
          </LogoLink>
          <Actions>
            <LocationButton>
              <MapPin size={22} weight="fill" />
              Porto Alegre, RS
            </LocationButton>
            <CartButton to="/checkout">
              <ShoppingCart size={22} weight="fill" />
              {coffees.length > 0 && <span>{coffees.length}</span>}
            </CartButton>
          </Actions>
        </nav>
      </Header>
      <Outlet />
    </>
  );
}
