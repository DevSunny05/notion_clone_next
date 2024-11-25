"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const DeleteDocument = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [isPending,startTransition]=useTransition()
    const pathname=usePathname()
    
    const handleDelete=()=>{

    }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant={"destructive"}>
        <DialogTrigger>Open</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure you want to delete?</DialogTitle>
          <DialogDescription>
           This action will delete the document and all its contents,removing all users from the documents.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end gap-2">
            <Button
                type="button"
                variant={"destructive"}
                onClick={handleDelete}
                disabled={isPending}
            >
                {isPending?"Deleting...":"Delete"}
            </Button>

            <DialogClose asChild>
                <Button type="button" variant={"secondary"}>
                    Close
                </Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDocument;
