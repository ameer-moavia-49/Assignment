const Dropdown = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [], 
  className = "", 
  required = false,
  ...props 
}) => {
  return (
    <label className="block">
      {label && (
        <span className="block text-sm font-medium text-slate-700 mb-1">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </span>
      )}
      <div className="relative mt-1.5">
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            form-select w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2
            placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary
            focus:ring-1 focus:ring-primary dark:border-navy-450 dark:hover:border-navy-400
            dark:focus:border-accent appearance-none ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700 dark:text-navy-100">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </label>
  );
};

export default Dropdown;