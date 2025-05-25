import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "./utilitys/Input";
import DateInput from "./utilitys/DateInput";
import Checkbox from "./utilitys/Checkbox";
import Button from "./utilitys/Button";


const ProjectFilter = ({
  isExpanded,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  if (!isExpanded) return null;

  return (
    <div
      className="py-3 transform transition-all duration-300 ease-in-out"
      style={{
        opacity: isExpanded ? 1 : 0,
        transform: isExpanded ? "translateY(0)" : "translateY(-20px)",
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6 animate-fadeIn">
        <Input
          label="Task Name"
          placeholder="Enter Task Name"
          icon="heroicons-outline:office-building"
        />
        <DateInput
          label="From:"
          selected={startDate}
          onChange={onStartDateChange}
          placeholder="Choose start date..."
        />

        <DateInput
          label="To:"
          selected={endDate}
          onChange={onEndDateChange}
          placeholder="Choose end date..."
          minDate={startDate}
        />

        <div className="sm:col-span-2">
          <span className="block text-lg font-medium text-slate-700 mb-1">
            Project Status:
          </span>
          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-5 lg:gap-6">
            <Checkbox label="Upcoming" color="secondary" />
            <Checkbox label="In Progress" color="primary" />
            <Checkbox label="Complete" color="success"  />
            <Checkbox label="Cancelled" color="error"  />
          </div>
        </div>
        <div className="sm:col-span-2 mt-5">
          <Button color="danger" variant="text" size="medium" >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;
