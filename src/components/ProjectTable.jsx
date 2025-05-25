import ActionMenu from "./action-menu";

const ProjectTable = ({ data }) => {
  const priorityColors = {
    high: { bg: 'bg-red-100', text: 'text-red-600' },
    medium: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
    low: { bg: 'bg-success-100', text: 'text-success-600' }
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return 'bg-success-500';
    if (progress > 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStatusColor = (status) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('complete') || statusLower.includes('completed')) return 'bg-green-500';
    if (statusLower.includes('cancel') || statusLower.includes('canceled')) return 'bg-red-500';
    if (statusLower.includes('progress') || statusLower.includes('in progress')) return 'bg-yellow-500';
    if (statusLower.includes('upcoming') || statusLower.includes('up coming')) return 'bg-purple-500';
    return 'bg-gray-500';
  };

  return (
    <div className="card mt-8 overflow-hidden border border-slate-200 rounded-lg shadow-sm">
      <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
        <table className="w-full text-left divide-y divide-slate-200">
          <thead>
            <tr className="bg-slate-100">
              {[
                { name: 'Project Name', className: 'rounded-tl-lg' },
                { name: 'Employer Name' },
                { name: 'Priority' },
                { name: 'Progress' },
                { name: 'Status' },
                { name: 'Start Date' },
                { name: 'End Date' },
                { name: 'Actions', className: 'rounded-tr-lg' }
              ].map((header, i) => (
                <th 
                  key={header.name}
                  className={`px-4 py-3 font-semibold uppercase text-slate-700 whitespace-nowrap ${header.className || ''}`}
                >
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="px-4 py-1 whitespace-nowrap">
                  {row.projectName}
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  {row.employerName}
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${priorityColors[row.priority.toLowerCase()]?.bg || ''} ${priorityColors[row.priority.toLowerCase()]?.text || ''}`}>
                    {row.priority}
                  </span>
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(row.progress)}`}
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-slate-600">{row.progress}%</span>
                  </div>
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`h-2 w-2 rounded-full ${getStatusColor(row.status)} mr-2`} />
                    <span>{row.status}</span>
                  </div>
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  {row.startDate ? new Date(row.startDate).toLocaleDateString() : '-'}
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  {row.endDate ? new Date(row.endDate).toLocaleDateString() : '-'}
                </td>
                <td className="px-4 py-1 whitespace-nowrap">
                  <ActionMenu onView={() => handleViewDetails(row)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;