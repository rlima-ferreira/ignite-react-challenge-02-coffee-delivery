import { styled } from 'styled-components';
import { TextLg } from '../base/Text';

export const Card = styled.article`
  width: 16rem;
  border-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 1.25rem 1.5rem;

  background-color: ${(props) => props.theme.colors.baseCard};

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 7.5rem;
      height: 7.5rem;
      margin-top: -2.75rem;
    }

    /* Categories */
    > div:first-of-type {
      display: flex;
      justify-content: center;
      gap: 0.25rem;
      flex-wrap: wrap;
    }

    /* Info */
    > div:last-of-type {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }
`;

export const CategoryTag = styled.span`
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;

  background-color: ${(props) => props.theme.colors.yellowLight};
  color: ${(props) => props.theme.colors.yellow};
`;

export const Actions = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const PriceText = styled(TextLg)`
  > span {
    font-weight: 400;
    font-size: 0.875rem;
  }
`;
