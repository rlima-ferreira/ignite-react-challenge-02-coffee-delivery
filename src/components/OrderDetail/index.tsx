import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import IconItem from '../IconItem';
import { Detail } from './styles';

export default function OrderDetail() {
  const {
    order: { address, paymentMethod },
  } = useContext(OrderContext);

  return (
    <Detail>
      <div>
        <IconItem
          iconColor="purple"
          icon={<MapPin size={16} weight="fill" />}
          text={
            <>
              Entrega em{' '}
              <strong>
                {address?.street}, {address?.number}
              </strong>
              <br />
              {address?.city} - {address?.neighborhood}, {address?.state}
            </>
          }
        />
        <IconItem
          iconColor="yellow"
          icon={<Timer size={16} weight="fill" />}
          text={
            <>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </>
          }
        />
        <IconItem
          iconColor="yellowDark"
          icon={<CurrencyDollar size={16} weight="fill" />}
          text={
            <>
              Pagamento na entrega
              <br />
              <strong>
                {paymentMethod === 'credit' && 'Cartão de Crédito'}
                {paymentMethod === 'debit' && 'Cartão de Débito'}
                {paymentMethod === 'money' && 'Dinheiro'}
              </strong>
            </>
          }
        />
      </div>
    </Detail>
  );
}
