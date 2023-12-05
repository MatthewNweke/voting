import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import DatePickerIcon from '../icons/DatePickerIcon';

const InputComponent = ({
  type,
  placeholder,
  disabled,
  password,
  label,
  error,
  register,
  accept,
  price,
  date,
}) => {
  const [passwordType, setPasswordType] = useState(type);
  const passwordToggle = () => {
    if (passwordType === 'text') {
      return (
        <FaEye
          className="text-gray-400 h-5 w-5 mx-2 cursor-pointer"
          onClick={() => setPasswordType('password')}
        />
      );
    } else if (passwordType === 'password') {
      return (
        <FaEyeSlash
          className="text-gray-400 h-5 w-5 mx-2 cursor-pointer"
          onClick={() => setPasswordType('text')}
        />
      );
    } else return null;
  };

  return (
    <div className="grid gap-1">
      <p className="text-[#35480D] font-normal text-sm">{label}</p>
      <div className="grid gap-1">
        <div
          className={
            error
              ? 'relative flex items-center bg-gray-50 border border-red-600 rounded-sm text-[#35480D]'
              : 'relative flex items-center bg-gray-50 border rounded-sm text-[#35480D]'
          }
        >
          {price && <span className="ml-3">&#8358;</span>}
          <input
            className="w-full py-2 px-3 outline-none bg-inherit rounded-sm no-number-arrows"
            type={passwordType}
            placeholder={placeholder}
            {...register}
            disabled={disabled}
            accept={accept}
          />
          {password && passwordToggle()}
          {date && (
            <div className="cursor-pointer">
              <DatePickerIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
