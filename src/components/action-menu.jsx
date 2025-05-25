// import IconButton from './utilitys/IconButton';
// import { useState } from 'react';
// import SideDrawer from './SideDrawer';

// const ActionIcons = ({ onView, onEdit, onDelete }) => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <div className="flex items-center space-x-1">
//       <IconButton
//         icon="heroicons-outline:eye"
//         onClick={() => {
//           setDrawerOpen(true);
//           onView?.();
//         }}
//         tooltip="View Details"
//         color="slate"
//       />
      
//       <IconButton
//         icon="heroicons-outline:pencil-alt"
//         onClick={onEdit}
//         tooltip="Edit"
//         color="primary"
//       />
      
//       <IconButton
//         icon="heroicons-outline:trash"
//         onClick={onDelete}
//         tooltip="Delete"
//         color="danger"
//       />

//       <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
//       </SideDrawer>
//     </div>
//   );
// };

// export default ActionIcons;


import IconButton from './utilitys/IconButton';
import { useState } from 'react';
import SideDrawer from './SideDrawer';
import ConfirmationDialog from './ConfirmationDialog';

const ActionIcons = ({ onView, onEdit, onDelete, recordId }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    onDelete?.(recordId);
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <div className="flex items-center space-x-1">
      <IconButton
        icon="heroicons-outline:eye"
        onClick={() => {
          setDrawerOpen(true);
          onView?.();
        }}
        tooltip="View Details"
        color="slate"
      />
      
      <IconButton
        icon="heroicons-outline:pencil-alt"
        onClick={onEdit}
        tooltip="Edit"
        color="primary"
      />
      
      <IconButton
        icon="heroicons-outline:trash"
        onClick={handleDeleteClick}
        tooltip="Delete"
        color="danger"
      />

      <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {/* Drawer content goes here */}
      </SideDrawer>

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={showDeleteConfirm}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        title="Confirm Delete"
          message={
    <>
      Are you sure you want to delete this record?
      <br />
      This action cannot be undone.
    </>
  }
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
};

export default ActionIcons;