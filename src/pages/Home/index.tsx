import { coffeeApi } from '../../api/coffee.api';
import CoffeeCard from '../../components/CoffeeCard';
import Intro from '../../components/Intro';
import { TitleLg } from '../../components/base/Title';
import { CoffeeList } from './styles';

export default function Home() {
  const coffees = coffeeApi.findAll();

  return (
    <>
      <Intro />
      <CoffeeList>
        <TitleLg color="baseSubtitle">Nossos cafés</TitleLg>
        <div>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} data={coffee} />
          ))}
        </div>
      </CoffeeList>
    </>
  );
}
