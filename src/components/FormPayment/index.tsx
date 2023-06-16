import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { OrderContext } from '../../contexts/OrderContext';
import { defaultTheme } from '../../styles/themes/default';
import { TextMd, TextSm } from '../base/Text';
import { Content, Form, Header, RadioButton } from './styles';

export default function FormPayment() {
  const { order } = useContext(OrderContext);
  const { register, watch } = useFormContext();
  const paymentMethod = watch('paymentMethod')
    ? watch('paymentMethod')
    : order.paymentMethod;

  return (
    <Form>
      <Header>
        <CurrencyDollar size={22} color={defaultTheme.colors.purple} />
        <div>
          <TextMd color="baseSubtitle">Pagamento</TextMd>
          <TextSm color="baseText">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </TextSm>
        </div>
      </Header>
      <Content>
        <RadioButton htmlFor="credit" active={paymentMethod === 'credit'}>
          <span>
            <CreditCard size={20} />
          </span>
          Cartão de Crédito
          <input
            {...register('paymentMethod')}
            type="radio"
            radioGroup="payment"
            value="credit"
            id="credit"
            checked={paymentMethod === 'credit'}
          />
        </RadioButton>
        <RadioButton htmlFor="debit" active={paymentMethod === 'debit'}>
          <span>
            <Bank size={16} />
          </span>
          Cartão de Débito
          <input
            {...register('paymentMethod')}
            type="radio"
            radioGroup="payment"
            value="debit"
            id="debit"
            checked={paymentMethod === 'debit'}
          />
        </RadioButton>
        <RadioButton htmlFor="money" active={paymentMethod === 'money'}>
          <span>
            <Money size={16} />
          </span>
          Dinheiro
          <input
            {...register('paymentMethod')}
            type="radio"
            radioGroup="payment"
            value="money"
            id="money"
            checked={paymentMethod === 'money'}
          />
        </RadioButton>
      </Content>
    </Form>
  );
}
