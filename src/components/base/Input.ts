import { styled } from 'styled-components';

export const Input = styled.input`
  padding: 0.75rem;
  border: 0;
  border-radius: 4px;
  outline-width: 1px;
  font-size: 0.875rem;
  line-height: 130%;
  width: 100%;

  color: ${(props) => props.theme.colors.baseText};
  background-color: ${(props) => props.theme.colors.baseInput};

  &:active,
  &:hover,
  &:focus {
    outline-color: ${(props) => props.theme.colors.yellowDark};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.baseLabel};
  }
`;
