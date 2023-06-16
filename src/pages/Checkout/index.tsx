import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as zod from 'zod';
import CartList from '../../components/CartList';
import FormOrder from '../../components/FormOrder';
import FormPayment from '../../components/FormPayment';
import { Fluid } from '../../components/base/Fluid';
import { OrderContext } from '../../contexts/OrderContext';
import { Form, FormView } from './styles';

const schema = zod.object({
  address: zod.object({
    zipcode: zod.string(),
    street: zod.string(),
    number: zod.string().min(0),
    complement: zod.string().optional(),
    neighborhood: zod.string(),
    city: zod.string(),
    state: zod.string().max(2),
  }),
  paymentMethod: zod.string(),
});

type FormData = zod.infer<typeof schema>;

export default function Checkout() {
  const navigate = useNavigate();
  const { addInfoPayment, resetCoffeeInCart } = useContext(OrderContext);
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = form;

  function handleCreateOrder(formData: FormData) {
    addInfoPayment(formData);
    resetCoffeeInCart();
    navigate('/success');
  }

  return (
    <Fluid>
      <Form onSubmit={handleSubmit(handleCreateOrder)}>
        <FormView>
          <FormProvider {...form}>
            <FormOrder />
            <FormPayment />
          </FormProvider>
        </FormView>
        <CartList />
      </Form>
    </Fluid>
  );
}
