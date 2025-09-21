import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";
import useDeleteProfile from "../hooks/use-delete-account";

const DeleteModel = () => {
  // Hooks
  const { deleteProfileMutate, isPending } = useDeleteProfile();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="destructive"
          className="w-full bg-red-50 text-red-600 hover:text-white"
        >
          Delete My Account
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[600px]">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <AlertTriangle className="h-12 w-12 text-red-500" />
            <div className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-20"></div>
          </div>

          <DialogHeader className="text-center space-y-6">
            <DialogTitle className="text-xl font-bold text-red-600">
              Are you sure you want to delete your account?
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              This action is permanent and cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <div className="w-full border-t pt-4">
            <div className="flex space-x-3">
              <DialogClose className="flex-1">
                <Button
                  variant="outline"
                  className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={() => deleteProfileMutate()}
                disabled={isPending}
                className="flex-1 bg-red-600 text-white hover:bg-red-700"
              >
                Yes, delete
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModel;
