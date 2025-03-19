"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { UserButton } from "@/features/auth/components/user-button";
import { useGetWorkSpaces } from "@/features/workspaces/api/use-get-workspaces";
import { useEffect, useMemo } from "react";
import { useCreateWorkspaceModal } from "@/features/workspaces/storage/use-create-workspace-modal";

const Home = () => {
  const { signOut } = useAuthActions();
  const {data,isLoading}=useGetWorkSpaces();
  const workspaceId=useMemo(()=> data?.[0]?._id,[data]);
   const[open,setOpen]=useCreateWorkspaceModal();

  useEffect(()=>{
    if(isLoading){
      return ;
    }
    if(workspaceId){
      console.log("Redirect to workspace ")
    }
    else if(!open){
      setOpen(true)
      console.log("Open creation model")
    }
  },[workspaceId,isLoading,open,setOpen])
  return (
    <div>
      <UserButton />
    </div>
  );
};
export default Home;
