import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import ProjectFilter from "./ProjectFilter";
import ProjectTable from "./ProjectTable";
import TeamAvatars from "./TeamAvatars";
import Button from "./utilitys/Button";
import IconButton from "./utilitys/IconButton";

const FilterTable = () => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState(tableData); 

  const handleAddTask = (newTask) => {
    const progress =
      newTask.status === "Complete"
        ? 100
        : newTask.status === "In Progress"
        ? 50
        : newTask.status === "Cancelled"
        ? 0
        : 0;

    const statusColor =
      newTask.status === "Complete"
        ? "text-success"
        : newTask.status === "In Progress"
        ? "text-primary dark:text-accent-light"
        : newTask.status === "Cancelled"
        ? "text-error"
        : "text-secondary";

    const deadline = newTask.endDate
      ? new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
        }).format(newTask.endDate)
      : "N/A";

    const taskToAdd = {
      projectName: newTask.projectName,
      employerName: newTask.employerName,
      progress: progress,
      status: newTask.status,
      statusColor: statusColor,
      deadline: deadline,
      priority: newTask.priority,
      startDate: newTask.startDate,
      endDate: newTask.endDate,
    };

    setTasks([...tasks, taskToAdd]);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full ">
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTask}
      />

      <div className="flex items-center justify-end">
        <Button color="slate" onClick={() => setIsModalOpen(true)}>Create New Task</Button>
      </div>

      <div className="flex items-center justify-end gap-6 mt-8">
        <TeamAvatars />

        <IconButton
          icon="heroicons-outline:filter"
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          tooltip="Toggle filters"
          color="slate"
        />
      </div>

      <ProjectFilter
        isExpanded={isFilterExpanded}
        onClose={() => setIsFilterExpanded(false)}
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={(date) => setStartDate(date)}
        onEndDateChange={(date) => setEndDate(date)}
      />

      <ProjectTable data={tasks} />
      {/* <div className="flex space-x-4 mb-4">
        <Link to="/overview" className="text-blue-600 hover:text-blue-800">Overview</Link>
        <Link to="/comments" className="text-blue-600 hover:text-blue-800">Comments</Link>
        <Link to="/subtasks" className="text-blue-600 hover:text-blue-800">Subtasks</Link>
      </div> */}
    </div>
  );
};

const tableData = [
  {
    projectName: "Web Application",
    employerName: "John Doe",
    progress: 42,
    status: "In Progress",
    statusColor: "text-primary dark:text-accent-light",
    deadline: "03 Sep",
    priority: "High",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-09-03"),
  },
  {
    projectName: "Android App",
    employerName: "Sabina Mores",
    progress: 77,
    status: "In Progress",
    statusColor: "text-primary dark:text-accent-light",
    deadline: "16 Sep",
    priority: "Medium",
    startDate: new Date("2023-08-10"),
    endDate: new Date("2023-09-16"),
  },
  {
    projectName: "iOS Application",
    employerName: "Bailie Coulman",
    progress: 100,
    status: "Cancelled",
    statusColor: "text-error",
    deadline: "N/A",
    priority: "Low",
    startDate: new Date("2023-08-05"),
    endDate: null,
  },
];

export default FilterTable;
