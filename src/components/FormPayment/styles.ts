import { styled } from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
  padding: 2.5rem;

  background-color: ${(props) => props.theme.colors.baseCard};
`;

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
`;

export const Content = styled.label`
  display: flex;
  gap: 0.75rem;
`;

export const RadioButton = styled.label<{ active?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.75rem;
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  transition: bacground-color 0.3s;
  position: relative;

  color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.baseText};
  background-color: ${(props) =>
    props.active ? props.theme.colors.yellow : props.theme.colors.baseButton};

  &:hover {
    background-color: ${(props) =>
      !props.active && props.theme.colors.baseHover};
  }

  span {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;

    color: ${(props) =>
      props.active ? props.theme.colors.white : props.theme.colors.purple};
  }

  input {
    display: none;
  }
`;
