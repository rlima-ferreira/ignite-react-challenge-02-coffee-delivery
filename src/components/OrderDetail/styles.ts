import { styled } from 'styled-components';

export const Detail = styled.div`
  padding: 0.0625rem;
  overflow: hidden;
  border-radius: 6px 36px;
  width: 32.875rem;
  background: linear-gradient(
    125deg,
    ${(props) => props.theme.colors.yellowDark} 12%,
    ${(props) => props.theme.colors.purple} 84%
  );

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    box-sizing: border-box;
    border-radius: 6px 36px;

    background-color: ${(props) => props.theme.colors.white};
  }

  /* linear-gradient(
    125deg,
    rgba(218, 172, 44, 1) 12%,
    rgba(128, 71, 248, 1) 84%
  ); */
`;
