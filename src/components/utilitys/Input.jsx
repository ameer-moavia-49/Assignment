const Input = ({ 
  label, 
  placeholder, 
  type = "text", 
  className = "", 
  required = false,
  ...props 
}) => {
  return (
    <label className="block w-full">
      {label && (
        <span className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </span>
      )}
      <div className="relative mt-1.5">
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className={`
            form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2
            placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary
            focus:ring-1 focus:ring-primary dark:border-navy-450 dark:hover:border-navy-400
            dark:focus:border-accent ${className}
          `}
          {...props}
        />
      </div>
    </label>
  );
};

export default Input;