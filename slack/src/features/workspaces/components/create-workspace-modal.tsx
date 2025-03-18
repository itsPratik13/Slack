"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useCreateWorkSpaceModal } from "../storage/use-create-workspace-modal"

  export const CreateWorkSpaceModal=()=>{
    const[open,setOpen]=useCreateWorkSpaceModal();

    const handleClose=()=>{
        setOpen(false);

    }

    return(
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Add a workspace
                  </DialogTitle>
                </DialogHeader>
            </DialogContent>

        </Dialog>
    )
  }