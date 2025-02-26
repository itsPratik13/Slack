"use client"
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";

const Home=()=>{
  const{signOut}=useAuthActions();
  return(
   <div>
    <Button onClick={()=> signOut()}>Sign out</Button>
    Logged in!
   </div>
    
    
  )
}
export default Home;