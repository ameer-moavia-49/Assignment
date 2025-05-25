
import React from 'react';
import TeamAvatars from './TeamAvatars';
import Input from './utilitys/Input';
import Button from './utilitys/Button';

const OverviewTab = () => {
  // Sample data - replace with your actual data
  const reporter = {
    name: 'John Doe',
    avatar: 'JD',
  };

  const assignee = {
    name: ['Jane Smith',' ' ,'jon Doe'],
    avatar: 'JS',
  };

  // Static values for date and priority (display only)
  const dueDate = new Date();
  const priority = 'low';
  const [description, setDescription] = React.useState('');

  // Format date for display
  const formattedDate = dueDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Priority badge styling
  const getPriorityBadge = (priority) => {
    const baseClasses = "px-4 py-2 rounded-full text-xs font-medium";
    
    switch(priority.toLowerCase()) {
      case 'high':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'medium':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'low':
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const handleSave = () => {
    // Handle save logic here
    console.log({
      description
      // Note: date and priority are no longer included as they're not editable
    });
  };

  return (
    <div className="overview-content space-y-6 max-w-3xl mx-auto">
      {/* Title Heading */}
      <h1 className="text-2xl font-bold text-gray-800">Task Overview</h1>

      {/* Reporter Section */}
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-gray-500">Reporter</h2>
        <div className="flex items-center space-x-3">
          <span className="text-gray-800">{reporter.name}</span>
          <TeamAvatars />
        </div>
      </div>

      {/* Assignee Section */}
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-gray-500">Assignee</h2>
        <div className="flex items-center space-x-3">
          <span className="text-gray-800">{assignee.name}</span>
          <TeamAvatars />
        </div>
      </div>

      {/* Due Date and Priority - Now as display only */}
      <div className="flex flex-col space-y-2">
        <div className="">
          <h2 className="text-sm font-medium text-gray-500">Due Date</h2>
          <div className=" text-gray-800">{formattedDate}</div>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-500">Priority</h2>
          <div className="flex items-center">
            <span className={getPriorityBadge(priority)}>
              {priority}
            </span>
          </div>
        </div>
      </div>

      {/* Description Form */}
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-gray-500">Description</h2>
        <Input
          rows={4}
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description..."
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          className="px-6 py-2"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default OverviewTab;