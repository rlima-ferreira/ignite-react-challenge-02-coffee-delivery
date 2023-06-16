import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { IOrderCoffee } from '../../reducers/order/reducer';
import { defaultTheme } from '../../styles/themes/default';
import { ButtonMd } from '../base/Button';
import InputNumber from '../base/InputNumber';
import { TextMd } from '../base/Text';
import { ActionArea, InfoArea, Item } from './styles';

interface IProps {
  data: IOrderCoffee;
}

export default function CoffeeItem({ data }: IProps) {
  const { addCoffeeInCart, removeCoffeeInCart } = useContext(OrderContext);

  function handleChangeQuantity(value: number) {
    if (data.quantity + value < 1) return;
    addCoffeeInCart({ ...data, quantity: data.quantity + value });
  }

  return (
    <Item>
      <InfoArea>
        <img src={data.photo} />
        <div>
          <TextMd color="baseSubtitle">{data.name}</TextMd>
          <ActionArea>
            <InputNumber
              value={data.quantity}
              onIncrement={() => handleChangeQuantity(1)}
              onDecrement={() => handleChangeQuantity(-1)}
            />
            <ButtonMd
              color="baseText"
              bg="baseButton"
              onClick={() => removeCoffeeInCart(data.id)}
            >
              <Trash size={16} color={defaultTheme.colors.purple} />
              Remover
            </ButtonMd>
          </ActionArea>
        </div>
      </InfoArea>
      <TextMd isBold color="baseText">
        R$ {(data.price * data.quantity).toFixed(2)}
      </TextMd>
    </Item>
  );
}
