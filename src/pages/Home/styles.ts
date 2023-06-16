import { styled } from 'styled-components';
import { Fluid } from '../../components/base/Fluid';

export const CoffeeList = styled(Fluid)`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  margin-top: 2rem;

  > div {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
