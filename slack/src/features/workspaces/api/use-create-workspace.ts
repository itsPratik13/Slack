import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { mutation } from "../../../../convex/_generated/server";
import { useCallback } from "react";


type Options={
    onSuccess?:()=>void;
    onError?:()=>void;
    onSettled?:()=>void;
}

type RequestType={name:string};
type ResponseType=any;

export const UseCreateWorkspace=()=>{
    const mutation=useMutation(api.workspaces.create);

    const mutate=useCallback(async (values:RequestType,options?:Options)=>{
        try{
          const response=await mutation(values);
          options?.onSuccess?.(); 
        }catch{
            options?.onError?.();

        }finally{
           options?.onSettled?.();
        }
    },[mutation]);

    return{
        mutate,
    };
}