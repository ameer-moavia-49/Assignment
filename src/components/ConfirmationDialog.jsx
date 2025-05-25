import React from 'react';
import Button from './utilitys/Button';

const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-medium mb-2 text-center">{title}</h3>
        <p className="text-gray-600 mb-6 text-center">{message}</p>
        <div className="flex justify-end space-x-3">
          <Button
            onClick={onClose}
            variant="contained"
            color="slate"
className='w-96'
          >
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            variant="contained"
            color="danger"
            className='w-96'
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;