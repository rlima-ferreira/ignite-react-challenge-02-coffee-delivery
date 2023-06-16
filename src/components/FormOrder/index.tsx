import { MapPin } from 'phosphor-react';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { OrderContext } from '../../contexts/OrderContext';
import { defaultTheme } from '../../styles/themes/default';
import { Input } from '../base/Input';
import { TextMd, TextSm } from '../base/Text';
import { TitleXs } from '../base/Title';
import {
  Content,
  Form,
  Header,
  LabelFull,
  LabelMd,
  LabelSm,
  Row,
} from './styles';

export default function FormOrder() {
  const {
    order: { address },
  } = useContext(OrderContext);
  const { register } = useFormContext();

  return (
    <div>
      <TitleXs color="baseSubtitle">Complete seu pedido</TitleXs>
      <Form>
        <Header>
          <MapPin size={22} color={defaultTheme.colors.yellow} />
          <div>
            <TextMd color="baseSubtitle">Endereço de Entrega</TextMd>
            <TextSm color="baseText">
              Informe o endereço onde deseja receber seu pedido
            </TextSm>
          </div>
        </Header>
        <Content>
          <LabelMd>
            <Input
              {...register('address.zipcode')}
              defaultValue={address.zipcode}
              placeholder="CEP"
              required
            />
          </LabelMd>
          <LabelFull>
            <Input
              {...register('address.street')}
              placeholder="Rua"
              defaultValue={address.street}
              required
            />
          </LabelFull>
          <Row>
            <LabelMd>
              <Input
                {...register('address.number')}
                placeholder="Número"
                defaultValue={address.number}
                min={0}
                required
              />
            </LabelMd>
            <LabelFull>
              <Input
                {...register('address.complement')}
                defaultValue={address.complement}
                placeholder="Complemento"
              />
            </LabelFull>
          </Row>
          <Row>
            <LabelMd>
              <Input
                {...register('address.neighborhood')}
                defaultValue={address.neighborhood}
                placeholder="Bairro"
                required
              />
            </LabelMd>
            <LabelFull>
              <Input
                {...register('address.city')}
                defaultValue={address.city}
                placeholder="Cidade"
                required
              />
            </LabelFull>
            <LabelSm>
              <Input
                {...register('address.state')}
                defaultValue={address.state}
                placeholder="UF"
                required
                minLength={2}
              />
            </LabelSm>
          </Row>
        </Content>
      </Form>
    </div>
  );
}
