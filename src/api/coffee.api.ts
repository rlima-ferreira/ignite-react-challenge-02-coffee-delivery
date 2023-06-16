export interface ICoffee {
  id: string;
  photo: string;
  name: string;
  categories: string[];
  description: string;
  price: number;
}

export const coffeeApi = {
  findAll: (): ICoffee[] => [
    {
      id: '1',
      photo: 'http://127.0.0.1:5173/public/assets/coffee/traditional.svg',
      name: 'Expresso Tradicional',
      categories: ['Tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: '2',
      photo: 'http://127.0.0.1:5173/public/assets/coffee/american.svg',
      name: 'Expresso Americano',
      categories: ['Tradicional'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
  ],
};
