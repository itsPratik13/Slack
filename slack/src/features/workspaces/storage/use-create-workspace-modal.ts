import {atom,useAtom } from "jotai"

const ModalState=atom(false) 

export const useCreateWorkSpaceModal=()=>{    // global state creation
    return useAtom(ModalState)
}