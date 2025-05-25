
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "./utilitys/Input";
import Dropdown from "./utilitys/Dropdown";
import Button from "./utilitys/Button";

const AddTaskModal = ({ isOpen, onClose, onSubmit }) => {
  const [newTask, setNewTask] = useState({
    projectName: "",
    employerName: "",
    startDate: null,
    endDate: null,
    status: "Upcoming",
    priority: "Medium",
  });

  const handleInputChange = (name, value) => {
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!newTask.projectName || !newTask.employerName) {
      alert("Please fill in all required fields");
      return;
    }
    onSubmit(newTask);
    setNewTask({
      projectName: "",
      employerName: "",
      startDate: null,
      endDate: null,
      status: "Upcoming",
      priority: "Medium",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-navy-700 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Add New Task</h2>

        <div className="space-y-4">
          <Input
            label="Task Name *"
            name="projectName"
            value={newTask.projectName}
            onChange={(e) => handleInputChange("projectName", e.target.value)}
            placeholder="Enter task name"
            required
          />

          <Dropdown
            label="Assign To"
            name="employerName"
            value={newTask.employerName}
            onChange={(e) => handleInputChange("employerName", e.target.value)}
            options={[
              { value: "", label: "Select person" },
              { value: "John Doe", label: "John Doe" },
              { value: "Sabina Mores", label: "Sabina Mores" },
              { value: "Bailie Coulman", label: "Bailie Coulman" },
            ]}
            required
          />

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-navy-100 mb-1">
              Start Date
            </label>
            <DatePicker
              selected={newTask.startDate}
              onChange={(date) => handleInputChange("startDate", date)}
              className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2
                placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary
                focus:ring-1 focus:ring-primary dark:border-navy-450 dark:hover:border-navy-400
                dark:focus:border-accent"
              placeholderText="Select start date"
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-navy-100 mb-1">
              End Date
            </label>
            <DatePicker
              selected={newTask.endDate}
              onChange={(date) => handleInputChange("endDate", date)}
              className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2
                placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary
                focus:ring-1 focus:ring-primary dark:border-navy-450 dark:hover:border-navy-400
                dark:focus:border-accent"
              placeholderText="Select end date"
              dateFormat="yyyy-MM-dd"
              minDate={newTask.startDate}
            />
          </div>

          <Dropdown
            label="Status"
            name="status"
            value={newTask.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
            options={[
              { value: "Upcoming", label: "Upcoming" },
              { value: "In Progress", label: "In Progress" },
              { value: "Complete", label: "Complete" },
              { value: "Cancelled", label: "Cancelled" },
            ]}
          />

          <Dropdown
            label="Priority"
            name="priority"
            value={newTask.priority}
            onChange={(e) => handleInputChange("priority", e.target.value)}
            options={[
              { value: "High", label: "High" },
              { value: "Medium", label: "Medium" },
              { value: "Low", label: "Low" },
            ]}
          />
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <Button
            onClick={onClose}
            size="medium"
            color="slate"
            variant="contained"
            className="w-32"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
             size="medium"
            color="primary"
            variant="contained"
             className="w-32"
          >
            Save Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;