import Button from "@/app/components/atoms/Button";
import Modal from "@/app/components/atoms/Modal";
import { DialogTitle } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface DeletePostModalProps {
  open: boolean;
  isPending: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeletePostModal: React.FC<DeletePostModalProps> = ({
  open,
  isPending,
  onClose,
  onDelete,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <ExclamationTriangleIcon
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <DialogTitle
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Are you sure you want to delete this post?
          </DialogTitle>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              This action cannot be undone. The data will be permanently removed
              forever.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-6">
        <Button
          variant="redSolid"
          className="!w-full"
          onClick={onDelete}
          loading={isPending}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeletePostModal;