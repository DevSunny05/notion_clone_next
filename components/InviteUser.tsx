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

const InviteUser = () => {
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
      <Button asChild variant={"outline"}>
        <DialogTrigger>Invite</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite a user to collabarate !</DialogTitle>
          <DialogDescription>
          Enter the email of the user you want to invite.
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

export default InviteUser;
