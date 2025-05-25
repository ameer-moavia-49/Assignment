import React, { useState } from 'react';
import Checkbox from './utilitys/Checkbox'; // Adjust path as needed
import Input from './utilitys/Input';     // Adjust path as needed
import Button from './utilitys/Button';   // Adjust path as needed

const SubtaskTab = () => {
  const initialSubtasks = [
    { id: 1, text: 'Research competitors', completed: false },
    { id: 2, text: 'Create wireframes', completed: false },
    { id: 3, text: 'Design UI mockups', completed: false },
    { id: 4, text: 'Develop prototype', completed: false },
    { id: 5, text: 'User testing', completed: false }
  ];

  const [subtasks, setSubtasks] = useState(initialSubtasks);
  const [newTaskText, setNewTaskText] = useState('');

  const completedCount = subtasks.filter(task => task.completed).length;
  const progressPercentage = (completedCount / subtasks.length) * 100;

  const toggleTask = (taskId) => {
    setSubtasks(subtasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const addNewTask = () => {
    if (newTaskText.trim()) {
      const newTask = {
        id: subtasks.length + 1,
        text: newTaskText,
        completed: false
      };
      setSubtasks([...subtasks, newTask]);
      setNewTaskText('');
    }
  };

  return (
    <div className="subtask-content ">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm text-gray-600">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-green-600 h-2.5 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-3 mb-6 flex flex-col">
        {subtasks.map((task) => (
          <Checkbox
            key={task.id}
            id={`task-${task.id}`}
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            label={task.text}
          />
        ))}
      </div>

      <div className="flex w-full mt-4">
        <Input
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          className='w-full'
          label='Add New Task'
        />
      </div>
      <div className='flex mt-4 justify-end'>
        <Button
          onClick={addNewTask}
          size="medium"
          color="primary"
          variant="contained"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default SubtaskTab;