import logo_visa from '../../assets/logo_visa.png';
import logo_mastercard from '../../assets/logo_mastercard.png';
import plus from '../../assets/plus.png';
import Topbar from '../../components/layout/Topbar';
import Services from './Services';

const PayNow = () => {
  return (
    <div>
      <Topbar />
      <div>
        <div className="flex justify-between">
          <Services />

          <form action="" method="" className="w-[500px] mt-10">
            <label>Payment Cards</label>
            <div className="flex items-center justify-around">
              <div className="flex w-[13rem] justify-center gap-2 items-center border-[2px] border-[#effcd7] px-1 py-1 rounded-[0.4rem]">
                <img
                  src={logo_mastercard}
                  className="w-[4rem] h-[3rem]"
                  alt=""
                />
                <p>Master card</p>
                <input
                  type="radio"
                  name="bankcard"
                  className="cursor-pointer border-[1px] border-black h-[1.2rem] w-[1.2rem]"
                />
              </div>

              <div className="flex w-[13rem] justify-center gap-2 items-center border-[2px] border-[#effcd7] px-1 py-1 rounded-[0.4rem]">
                <img src={logo_visa} className="w-[4rem] h-[3rem]" alt="" />
                <p>Visa card</p>
                <input
                  type="radio"
                  name="bankcard"
                  className="cursor-pointer border-[1px] border-black h-[1.2rem] w-[1.2rem]"
                />
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <button className="text flex bg-custom-color items-center gap-2 w-[14rem] h-[3rem] rounded-[0.4rem] p-2">
                <div className="bg-[#6B911B] p-1  rounded-[0.2rem]">
                  <img src={plus} alt="" className="w-[1rem] h-[1rem]" />
                </div>
                <p className="font-semibold">Add a Credit Card</p>
              </button>
            </div>
            <form action="" method="" className="mt-5">
              <p className=" font-bold text-center">Add Credit Card</p>
              <p className="text-[custom-color-transparent]">
                Card information
              </p>
              <div className="flex flex-col gap-10">
                <div>
                  <label htmlFor="" className="font-bold">
                    Card Number
                  </label>{' '}
                  <br />
                  <input
                    type="text"
                    className="border-[2px]  border-[white] rounded-[0.4rem] bg-[transparent] w-[80%] p-2 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-bold">
                    Expires
                  </label>{' '}
                  <br />
                  <input
                    type="text"
                    className="border-[2px] border-[white] rounded-[0.4rem] bg-[transparent] w-[80%] p-2 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-bold">
                    Cvv
                  </label>{' '}
                  <br />
                  <input
                    type="text"
                    className="border-[2px]  border-[white] rounded-[0.4rem] bg-[transparent] w-[80%] p-2 outline-none"
                  />
                </div>
              </div>
            </form>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
