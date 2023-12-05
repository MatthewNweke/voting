import FacebookIcon from './utils/icons/FacebookIcon';
import InstagramIcon from './utils/icons/InstagramIcon';
import TwitterIcon from './utils/icons/TwitterIcon';
import YoutubeIcon from './utils/icons/YoutubeIcon';

const Footer = () => {
  return (
    <div className="bg-[#35480D] w-full text-white text-lg px-3 lg:px-14 xl:px-44">
      <div className="w-full flex flex-col md:flex-row flex-wrap items-start justify-between py-10">
        <div>
          <p className="font-semibold mb-7 text-lg">Can we help you?</p>

          <div className="flex flex-col gap-3">
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">Home</p>
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Hotel Map
            </p>
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Group Enquiries
            </p>
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Book Direct
            </p>
          </div>
        </div>

        <div>
          <p className="mb-14"></p>
          <div className="flex flex-col gap-3">
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Contact Us
            </p>
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Offers
            </p>
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">Blog</p>
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Brochure
            </p>
          </div>
        </div>

        <div>
          <p className="mb-14"></p>
          <div className="flex flex-col gap-3">
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Rewards
            </p>
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Business
            </p>
            <p className="text-sm cursor-pointer hover:text-[#6B911B]">
              Statement
            </p>
          </div>
        </div>

        <div className="mx-auto md:mx-0 flex flex-col items-center justify-center mt-14 md:mt-0">
          <p className="font-semibold text-lg">Keep in touch</p>
          <div className="flex items-center gap-3 my-3">
            <FacebookIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <InstagramIcon />
          </div>

          <p className="font-semibold my-5">Cookie Settings</p>
          <div className="flex items-center gap-3">
            <p className="font-medium text-sm cursor-pointer hover:text-[#6B911B]">
              About us
            </p>
            <p className="font-medium text-sm cursor-pointer hover:text-[#6B911B]">
              T&C
            </p>
            <p className="font-medium text-sm cursor-pointer hover:text-[#6B911B]">
              Privacy Policy
            </p>
            <p className="font-medium text-sm cursor-pointer hover:text-[#6B911B]">
              Affiliates
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm italic text-center pb-3">
        Copyright of Aaron & Harriet’s hotels, a subsidiary of Aaron & Harriet’s
        group
      </p>
    </div>
  );
};

export default Footer;
