import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import CoffeeItem from '../CoffeeItem';
import { TitleXs } from '../base/Title';
import { Cart, Content, Price, PriceArea, SubmitButton } from './styles';

export default function CartList() {
  const {
    order: { coffees },
  } = useContext(OrderContext);
  const deliveryFee = coffees.length > 0 ? 3.5 : 0;
  const subtotal = coffees.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );
  const total = deliveryFee + subtotal;

  return (
    <Cart>
      <TitleXs color="baseSubtitle">Cafés selecionados</TitleXs>
      <Content>
        {coffees.map((coffee) => (
          <CoffeeItem key={coffee.id} data={coffee} />
        ))}
        <PriceArea>
          <Price color="baseText">
            Total de items <span>R$ {subtotal.toFixed(2)}</span>
          </Price>
          <Price color="baseText">
            Entrega <span>R$ {deliveryFee.toFixed(2)}</span>
          </Price>
          <Price color="baseSubtitle" isBold>
            Total <span>R$ {total.toFixed(2)}</span>
          </Price>
        </PriceArea>
        <SubmitButton
          type="submit"
          bg="yellow"
          hover="yellowDark"
          color="white"
          disabled={coffees.length === 0}
        >
          Confirmar Pedido
        </SubmitButton>
      </Content>
    </Cart>
  );
}
