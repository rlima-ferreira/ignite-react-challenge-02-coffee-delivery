import { styled } from 'styled-components';
import { ButtonLg } from '../base/Button';
import { TextSm } from '../base/Text';

export const Cart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 28rem;
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  background-color: ${(props) => props.theme.colors.baseCard};
`;

export const PriceArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8438rem;

  > p:last-of-type {
    font-size: 1.25rem;
  }
`;

export const Price = styled(TextSm)`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1rem;
  }
`;

export const SubmitButton = styled(ButtonLg)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  width: 100%;
`;
