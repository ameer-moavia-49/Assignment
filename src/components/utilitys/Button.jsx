const Button = ({
  color = 'primary',
  variant = 'contained',
  children,
  onClick,
  className = '',
  disabled = false,
  size = 'medium',
  fullWidth = false,
  startIcon,
  endIcon,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2';

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-5 py-2.5 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const iconSizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-5 w-5',
    large: 'h-6 w-6'
  };

  const variantClasses = {
    contained: {
      slate: 'bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-300',
      primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
      secondary: 'bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-300',
      success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-300',
      danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
      warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-300',
      info: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-300'
    },
    outlined: {
      slate: 'border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-300',
      primary: 'border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-300',
      secondary: 'border border-purple-500 text-purple-500 hover:bg-purple-50 focus:ring-purple-300',
      success: 'border border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-300',
      danger: 'border border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-300',
      warning: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-300',
      info: 'border border-cyan-500 text-cyan-500 hover:bg-cyan-50 focus:ring-cyan-300'
    },
    text: {
      slate: 'text-slate-700 hover:bg-slate-100 focus:ring-slate-300',
      primary: 'text-blue-500 hover:bg-blue-100 focus:ring-blue-300',
      secondary: 'text-purple-500 hover:bg-purple-100 focus:ring-purple-300',
      success: 'text-green-500 hover:bg-green-100 focus:ring-green-300',
      danger: 'text-red-500 hover:bg-red-100 focus:ring-red-300',
      warning: 'text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-300',
      info: 'text-cyan-500 hover:bg-cyan-100 focus:ring-cyan-300'
    }
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : '';

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant][color]}
        ${disabledClasses}
        ${widthClass}
        ${className}
      `}
      {...props}
    >
      <span className={`flex items-center justify-center gap-2 ${fullWidth ? 'w-full' : ''}`}>
        {startIcon && (
          <span className={`flex ${iconSizeClasses[size]}`}>
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span className={`flex ${iconSizeClasses[size]}`}>
            {endIcon}
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;