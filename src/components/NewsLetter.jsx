import Button from './utils/reusables/Button';
import InputComponent from './utils/reusables/InputComponent';

const NewsLetter = () => {
  return (
    <div className="bg-[#DAE3C6] w-full text-[#35480D] py-5 mt-[2rem] px-3 md:px-[5rem] lg:px-[7rem] xl:px-[20rem] flex flex-col gap-3">
      <p className="text-lg md:text-xl font-semibold text-center">
        Join Our Newsletter
      </p>
      <p className="text-center">
        Stay up to date with all the latest gist, news, offers and everything
        inbetween concerning our hotel
      </p>
      <div className="w-full mt-2">
        <form className="w-full flex items-center gap-3">
          <div className="w-full">
            <InputComponent type={'text'} placeholder={'Full Name'} />
          </div>
          <div className="w-full">
            <InputComponent type={'email'} placeholder={'Email'} />
          </div>
          <div className="mt-1">
            <Button>Subscribe</Button>
          </div>
        </form>
        <p className="text-[#35480D] text-sm md:text-base w-full xl:w-[70%] my-[1rem]">
          You can unsubscribe at any time by clicking a link at the bottom of
          each of our emails. We will not share your information with any third
          party whatsoever.
        </p>

        <div className="mt-[2rem] flex flex-col gap-2">
          <div className="flex md:items-center gap-2">
            <div className="mb-1">
              <InputComponent type={'checkbox'} />
            </div>
            <p className="text-sm">
              Yes i would like to hear about offers and promotion from Aaron &
              Harriet’s Hotels
            </p>
          </div>

          <div className="flex md:items-center gap-2">
            <div className="mb-1">
              <InputComponent type={'checkbox'} />
            </div>
            <p className="text-sm">
              I agree to the{' '}
              <span className="text-[#00ADEF]">Terms and conditions </span>and{' '}
              <span className="text-[#00ADEF]">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
