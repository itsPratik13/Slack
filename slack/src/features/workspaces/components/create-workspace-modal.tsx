"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateWorkSpaceModal } from "../storage/use-create-workspace-modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export const CreateWorkSpaceModal = () => {
  const [open, setOpen] = useCreateWorkSpaceModal();

  const handleClose = () => {
    setOpen(false);
  };
  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            {...form.register("name", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
            disabled={false}
            autoFocus
            placeholder="Workspace name ex:'Home', 'Work'"
          />
          <div className="flex justify-end">
            <Button disabled={false} variant="slack">Create </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
