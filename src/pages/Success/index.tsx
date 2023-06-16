import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail';
import { Fluid } from '../../components/base/Fluid';
import { TextLg } from '../../components/base/Text';
import { TitleLg } from '../../components/base/Title';
import { OrderContext } from '../../contexts/OrderContext';
import Deliveryman from './../../assets/deliveryman.svg';
import { Container } from './styles';

export default function Success() {
  const { order } = useContext(OrderContext);

  if (!order.address.zipcode) return <Navigate to={'/'} replace />;

  return (
    <Fluid>
      <Container>
        <TitleLg color="yellowDark">Uhu! Pedido confirmado</TitleLg>
        <TextLg color="baseSubtitle">
          Agora é só aguardar que logo o café chegará até você
        </TextLg>
        <div>
          <OrderDetail />
          <img src={Deliveryman} />
        </div>
      </Container>
    </Fluid>
  );
}
