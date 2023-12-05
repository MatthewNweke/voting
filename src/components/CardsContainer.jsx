import electricity_img from '../assets/electricity.svg';
import golf_img from '../assets/golf.svg';
import karaoke_img from '../assets/karaoke.svg';
import card_img_1 from '../assets/kids_corner.svg';
import security_img from '../assets/security.svg';
import vip_img from '../assets/vip.svg';
import HomeCard from './utils/cards/HomeCard';

const CardsContainer = () => {
  return (
    <div className="w-[90%] xl:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-5">
      <HomeCard
        image={karaoke_img}
        title={'Karaoke & Bowling Bar'}
        description={'Sing along, play along,drink along'}
      />
      <HomeCard
        image={card_img_1}
        title={'Kids Corner'}
        description={'Stay time is fun time'}
      />

      <HomeCard
        image={golf_img}
        title={'Golf Course'}
        description={'So good you would think your’e retired'}
      />
      <HomeCard
        image={security_img}
        title={'Security'}
        description={'Safety first and we agree'}
      />

      <HomeCard
        image={electricity_img}
        title={'24/7 Electricity'}
        description={'Lights never go out'}
      />

      <HomeCard
        image={vip_img}
        title={'Card Carrying Members'}
        description={'Good just got better'}
      />
    </div>
  );
};

export default CardsContainer;
