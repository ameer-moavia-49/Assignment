const Checkbox = ({ label, checked, color = "primary", className = "", ...props }) => {
  const colorClasses = {
    primary: "checked:border-primary checked:bg-primary hover:border-primary focus:border-primary",
    secondary: "checked:border-secondary checked:bg-secondary hover:border-secondary focus:border-secondary",
    success: "checked:!border-success checked:bg-success hover:!border-success focus:!border-success",
    error: "checked:!border-error checked:bg-error hover:!border-error focus:!border-error",
  };

  return (
    <label className="inline-flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        className={`
          form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 
          ${colorClasses[color]}
          ${className}
        `}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;