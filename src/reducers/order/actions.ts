import { ICoffee } from '../../api/coffee.api';

export enum OrderAction {
  ADD_COFFEE = 'ADD_COFFEE',
  ADD_INFO_PAYMENT = 'ADD_INFO_PAYMENT',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  RESET_COFFEE = 'RESET_COFFEE',
}

export const addCoffeeAction = (coffee: ICoffee) => ({
  type: OrderAction.ADD_COFFEE,
  payload: {
    data: coffee,
  },
});

export const removeCoffeeAction = (coffeeId: string) => ({
  type: OrderAction.REMOVE_COFFEE,
  payload: {
    data: coffeeId,
  },
});

export const resetCoffeeAction = () => ({
  type: OrderAction.RESET_COFFEE,
  payload: {
    data: null,
  },
});

export const addInfoPaymentAction = (payload: any) => ({
  type: OrderAction.ADD_INFO_PAYMENT,
  payload: {
    data: payload,
  },
});
