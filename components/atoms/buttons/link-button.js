const styles = {
  primary: 'bg-blue-600 hover:bg-blue-700',
  success: 'bg-emerald-600 hover:bg-emerald-700',
  danger: 'bg-rose-600 hover:bg-rose-700',
  grey: 'bg-slate-600 hover:bg-slate-700',
  white: 'bg-White hover:bg-blue-50 !text-blue-600',
};

const LinkButton = ({ onClick, className, disabled, style = 'primary', children }) => {
  return (
    <button
      className={`${className} ${styles[style]} text-white rounded 
                    px-3 py-1 transition-colors duration-200`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default LinkButton;
