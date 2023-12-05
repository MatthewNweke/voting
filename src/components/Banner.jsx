import bannerImg from '../assets/banner_img.svg';
import ReservationForm from './ReservationForm';

const Banner = () => {
  return (
    <div className="relative">
      <img
        src={bannerImg}
        alt=""
        className="w-full h-full min-h-[100vh] object-cover"
      />

      <div className="absolute top-40 left-3 lg:left-16 xl:left-48 right-[2rem] lg:right-[5rem] xl:right-[12rem] flex justify-between items-center place-items-center">
        <div>
          <p className="text-xl text-white font-semibold capitalize bg-[#35480D99] p-2  max-w-max mb-[0.5rem]">
            Experience Royalty
          </p>
          <p className="bg-[#ffffff99] text-[#35480D] text-lg p-2">
            Witness the beauty and elegance within our walls
          </p>
        </div>

        <ReservationForm />
      </div>
    </div>
  );
};

export default Banner;
