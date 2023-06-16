import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 2rem;
  align-items: flex-start;
  padding-top: 3rem;
`;

export const FormView = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 40rem;
`;
