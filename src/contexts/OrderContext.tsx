import { ReactNode, createContext, useEffect, useReducer } from 'react';
import {
  addCoffeeAction,
  addInfoPaymentAction,
  removeCoffeeAction,
  resetCoffeeAction,
} from '../reducers/order/actions';
import {
  IOrderCoffee,
  IOrderState,
  orderReducer,
} from '../reducers/order/reducer';
import storage from '../utils/storage';

interface IProps {
  children: ReactNode;
}

type ContextType = {
  order: IOrderState;
  addCoffeeInCart: (coffee: IOrderCoffee) => void;
  addInfoPayment: (data: any) => void;
  removeCoffeeInCart: (id: string) => void;
  resetCoffeeInCart: () => void;
};

export const OrderContext = createContext({} as ContextType);

export default function OrderProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(
    orderReducer,
    {
      coffees: [],
      address: {},
    },
    (initialState) => {
      const item = storage.getItem('order');
      return !item ? initialState : JSON.parse(item);
    }
  );

  useEffect(() => {
    storage.setItem('order', JSON.stringify(state));
  }, [state]);

  function addCoffeeInCart(coffee: IOrderCoffee) {
    dispatch(addCoffeeAction(coffee));
  }

  function addInfoPayment(data: any) {
    dispatch(addInfoPaymentAction(data));
  }

  function removeCoffeeInCart(id: string) {
    dispatch(removeCoffeeAction(id));
  }

  function resetCoffeeInCart() {
    dispatch(resetCoffeeAction());
  }

  return (
    <OrderContext.Provider
      value={{
        order: state,
        addCoffeeInCart,
        removeCoffeeInCart,
        resetCoffeeInCart,
        addInfoPayment,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
