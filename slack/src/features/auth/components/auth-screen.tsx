"use client";
import React, { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";
export const AuthScreen=()=>{
    const[state,setState]=useState<SignInFlow>("signIn");
    return(
      <div className=" bg-[#222629] h-screen flex items-center justify-center ">
      <div className="md:h-auto md:w-[420px] text-white" >
        {state==='signIn' ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
        </div>
      </div>
      
    );

};