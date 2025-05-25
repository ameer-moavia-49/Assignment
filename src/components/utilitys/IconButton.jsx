import { Icon } from '@iconify/react';

const IconButton = ({ 
  icon, 
  onClick, 
  tooltip, 
  className = "",
  color = "slate" 
}) => {
  const colorVariants = {
    slate: "hover:bg-slate-100 text-slate-700",
    primary: "hover:bg-blue-100 text-blue-600",
    danger: "hover:bg-red-100 text-red-600",
    success: "hover:bg-green-100 text-green-600",
    warning: "hover:bg-amber-100 text-amber-600",
  };

  return (
    <button
      onClick={onClick}
      className={`
        p-2 rounded-full transition-colors
        ${colorVariants[color]}
        ${className}
      `}
      title={tooltip}
    >
      <Icon icon={icon} className="w-5 h-5" />
    </button>
  );
};

export default IconButton;