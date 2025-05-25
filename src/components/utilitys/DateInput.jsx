import DatePicker from 'react-datepicker';
import { Icon } from '@iconify/react';

const DateInput = ({ 
  label, 
  placeholder, 
  selected, 
  onChange, 
  minDate, 
  className = "", 
  ...props 
}) => {
  return (
    <label className="block w-full">
      {label && (
        <span className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </span>
      )}
      <div className="relative mt-1.5 w-full">
        <DatePicker
          selected={selected}
          onChange={onChange}
          minDate={minDate}
          placeholderText={placeholder}
          dateFormat="yyyy-MM-dd"
          className={`
            form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9
            placeholder:text-slate-400/70 hover:border-slate-400 
            focus:border-primary focus:ring-1 focus:ring-primary
            ${className}
          `}
          {...props}
        />
        <span className="pointer-events-none absolute left-0 top-0 flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary">
          <Icon icon="heroicons-outline:calendar" className="h-5 w-5" />
        </span>
      </div>
    </label>
  );
};

export default DateInput;