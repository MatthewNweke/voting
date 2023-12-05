const Button = ({ children, eventHandler, type, loading }) => {
  const styles = {
    main: `flex items-center justify-center w-full outline-none font-semibold text-base text-white rounded-sm bg-[#35480D] border-0 border-[#35480D] py-2 px-3`,
  };

  return (
    <button
      onClick={eventHandler}
      type={type}
      disabled={loading}
      className={styles?.main}
    >
      {children}
    </button>
  );
};

export default Button;
