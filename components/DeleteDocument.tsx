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
import { usePathname, useRouter } from "next/navigation";
import { deleteDocument } from "@/actions/actions";
import { toast } from "sonner";

const DeleteDocument = () => {
    const [isOpen,setIsOpen]=useState(false)
    const [isPending,startTransition]=useTransition()
    const pathname=usePathname()
    const router=useRouter()

    const handleDelete=()=>{
        const roomId=pathname.split("/").pop()

        if(!roomId) return


        startTransition(async ()=>{
            const {success}=await deleteDocument(roomId)

            if(success){
                setIsOpen(false)
                router.replace("/")
                toast.success("Room deleted successfully")
            }else{
                toast.error("Room deleted successfully")

            }
        })
    }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant={"destructive"}>
        <DialogTrigger>Delete</DialogTrigger>
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
