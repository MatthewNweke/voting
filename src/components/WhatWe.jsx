import culinary_img from '../assets/culinary.svg';
import green_img from '../assets/green.svg';
import the_view_img from '../assets/the_view.svg';
import Button from './utils/reusables/Button';
import SelectComponent from './utils/reusables/SelectComponent';
import WhatWeOffer from './utils/reusables/WhatWeOffer';

const WhatWe = () => {
  return (
    <div className="w-[90%] xl:w-[72%] mx-auto my-[2rem] flex flex-col gap-5 lg:gap-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:h-[17rem] border border-[#35480D]">
        <img
          src={the_view_img}
          alt=""
          className="w-full md:w-[50%] xl:w-full h-full object-cover"
        />
        <WhatWeOffer
          title={'Enjoy The View'}
          subtitle={'Enjoy views from our strategically positions'}
          description={
            'From Obudu to Ogbunike, Ikogosi to Idanre, our hotels have been strategically cited to ensure the best views in their respective cities'
          }
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:h-[17rem] border border-[#35480D]">
        <WhatWeOffer
          title={'Goin’ Green'}
          subtitle={'We care for the planet too'}
          description={
            'We reduce and recycle, and also generally choose greener alternatives as our way of doing our small bit to care for our dear blue planet'
          }
        />
        <img
          src={green_img}
          alt=""
          className="w-full md:w-[50%] xl:w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full md:h-[17rem] border border-[#35480D]">
        <img
          src={culinary_img}
          alt=""
          className="w-full md:w-[50%] xl:w-full h-full object-cover"
        />
        <WhatWeOffer
          title={'Halal? Vegan? No Qualms'}
          subtitle={'Personalize your dishes at our hotels'}
          description={
            'We also let you decide how your meals are prepared for cruelty-free alternatives and 100% halal variants'
          }
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:h-[17rem] border border-[#35480D]">
        <div className="w-full h-full flex flex-col">
          <p className="bg-[#35480D] text-white text-4xl font-bold p-5">Map</p>

          <div className="px-5 py-4 flex flex-col gap-3">
            <div>
              <p className="text-[#35480D] font-medium">Select Branch</p>
              <div className="border border-[#35480D]">
                <SelectComponent elements={['Nike Lake', 'Golden Valley']} />
              </div>
            </div>

            <div className="w-[10rem]">
              <Button>Load Map</Button>
            </div>
          </div>
        </div>
        <div className="min-h-[10rem] flex bg-[url('/src/assets/map_img.svg')] bg-no-repeat bg-center bg-cover h-full w-full">
          <p className="m-auto p-3 border-white border-8 font-extrabold text-3xl text-white">
            Use Map
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWe;
