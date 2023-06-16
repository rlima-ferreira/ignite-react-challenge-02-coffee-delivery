import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { ICoffee } from '../../api/coffee.api';
import { OrderContext } from '../../contexts/OrderContext';
import { ButtonMd } from '../base/Button';
import InputNumber from '../base/InputNumber';
import { TextSm } from '../base/Text';
import { TitleSm } from '../base/Title';
import { Actions, Card, CategoryTag, PriceText } from './styles';

interface IProps {
  data: ICoffee;
}

export default function CoffeeCard({ data }: IProps) {
  const {
    order: { coffees },
    addCoffeeInCart,
  } = useContext(OrderContext);
  const coffee = coffees.find((coffee) => coffee.id === data.id);
  const [quantity, setQuantity] = useState(coffee?.quantity || 1);
  function handleChangeQuantity(value: number) {
    if (quantity + value < 1) return;
    setQuantity((state) => state + value);
  }

  return (
    <Card>
      <main>
        <img src={data.photo} />
        <div>
          {data.categories.map((category) => (
            <CategoryTag key={category}>{category}</CategoryTag>
          ))}
        </div>
        <div>
          <TitleSm color="baseSubtitle">{data.name}</TitleSm>
          <TextSm color="baseLabel">{data.description}</TextSm>
        </div>
      </main>
      <Actions>
        <PriceText color="baseText" isBold>
          <span>R$ </span>
          {data.price.toFixed(2)}
        </PriceText>
        <div>
          <InputNumber
            value={quantity}
            onIncrement={() => handleChangeQuantity(1)}
            onDecrement={() => handleChangeQuantity(-1)}
          />
          <ButtonMd
            type="button"
            bg="purpleDark"
            hover="purple"
            color="white"
            onClick={() => addCoffeeInCart({ ...data, quantity })}
          >
            <ShoppingCart size={22} weight="fill" />
          </ButtonMd>
        </div>
      </Actions>
    </Card>
  );
}
