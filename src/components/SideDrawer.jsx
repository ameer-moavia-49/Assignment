import React, { useState } from 'react';
import { X } from 'lucide-react';
import OverviewTab from './OverviewTab';
import CommentsTab from './CommentsTab';
import SubtaskTab from './SubtaskTab';





const SideDrawer = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'subtask':
        return <SubtaskTab />;
      case 'comments':
        return <CommentsTab />;
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-92 lg:w-120 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">View Details</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <div className="flex p-2 bg-gray-100">
          {['overview', 'subtask', 'comments'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 p-2 text-sm font-medium border-b-2 ${
                activeTab === tab
                  ? 'bg-white '
                  : 'border-transparent text-slate-600 hover:text-gray-700 cursor-pointer'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="p-4">{renderTabContent()}</div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-100 bg-opacity-10 z-40"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default SideDrawer;