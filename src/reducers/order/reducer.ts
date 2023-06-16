import { produce } from 'immer';
import { ICoffee } from '../../api/coffee.api';

export interface IOrderCoffee extends ICoffee {
  quantity: number;
}

export interface IOrderState {
  coffees: IOrderCoffee[];
  paymentMethod: 'credit' | 'debit' | 'money';
  address: {
    zipcode: string;
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  };
}

interface IAction {
  type: string;
  payload: {
    data: any;
  };
}

export function orderReducer(state: IOrderState, action: IAction) {
  switch (action.type) {
    case 'ADD_COFFEE': {
      const index = state.coffees.findIndex(
        (coffee) => coffee.id === action.payload.data.id
      );

      if (index >= 0)
        return produce(state, (data) => {
          data.coffees[index].quantity = action.payload.data.quantity;
        });

      return produce(state, (data) => {
        data.coffees.push(action.payload.data);
      });
    }
    case 'REMOVE_COFFEE': {
      const coffees = state.coffees.filter(
        (coffee) => coffee.id !== action.payload.data
      );

      return produce(state, (data) => {
        data.coffees = coffees;
      });
    }
    case 'RESET_COFFEE':
      return { ...state, coffees: [] };
    case 'ADD_INFO_PAYMENT': {
      const { address, paymentMethod } = action.payload.data;
      return { ...state, address, paymentMethod };
    }
    default:
      return state;
  }
}
