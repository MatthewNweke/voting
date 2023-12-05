import Button from './utils/reusables/Button';
import InputComponent from './utils/reusables/InputComponent';
import SelectComponent from './utils/reusables/SelectComponent';

const ReservationForm = () => {
  return (
    <div className="bg-[#35480D] w-96 h-[34rem] p-1 flex flex-col">
      <p className="mx-2 mt-5 mb-2 text-xl font-medium text-white">
        Make Reservation
      </p>
      <form className="flex-1 bg-[#DAE3C6] p-3 w-full">
        <div className="mb-4">
          <SelectComponent
            elements={['Select Branch', 'Nike Lake', 'Golden Valley']}
          />
        </div>

        <div className="mb-4">
          <InputComponent
            label={'Arrival Date'}
            type={'text'}
            placeholder={'28-08-2023'}
            date
          />
        </div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <SelectComponent label={'Nights'} elements={['1', '2', '3']} />
          <SelectComponent
            label={'Class'}
            elements={['...', 'Normal', 'VIP']}
          />
        </div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <SelectComponent label={'Adults(15+)'} elements={['1', '2', '3']} />
          <SelectComponent label={'Children'} elements={['0', '1', '2']} />
          <SelectComponent
            label={'Infants (0-2)'}
            elements={['...', '1', '2']}
          />
        </div>

        <div className="mb-4">
          <InputComponent
            label={'Price'}
            type={'number'}
            placeholder={'25,000.00'}
            price
          />
        </div>

        <div className="mt-3">
          <Button>Pay and reserve</Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
