import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import Cup from '../../assets/intro-cup.svg';
import IconItem from '../IconItem';
import { TextLg } from '../base/Text';
import { TitleXl } from '../base/Title';
import { Banner, Image, Items, Title } from './styles';

export default function Intro() {
  return (
    <Banner>
      <div>
        <Title>
          <TitleXl color="baseTitle">
            Encontre o café perfeito para qualquer hora do dia
          </TitleXl>
          <TextLg color="baseSubtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </TextLg>
        </Title>
        <Items>
          <IconItem
            icon={<ShoppingCart size={16} weight="fill" />}
            text="Compra simples e segura"
            iconColor="yellowDark"
          />
          <IconItem
            icon={<Package size={16} weight="fill" />}
            text="Embalagem mantém o café intacto"
            iconColor="baseText"
          />
          <IconItem
            icon={<Timer size={16} weight="fill" />}
            text="Entrega rápida e rastreada"
            iconColor="yellow"
          />
          <IconItem
            icon={<Coffee size={16} weight="fill" />}
            text="O café chega fresquinho até você"
            iconColor="purple"
          />
        </Items>
      </div>
      <div>
        <Image src={Cup} />
      </div>
    </Banner>
  );
}
