'use client';

import { atom, useAtom } from 'jotai';

const createWorkspaceModalAtom = atom(false);

export const useCreateWorkspaceModal = () => {         //global state management
  return useAtom(createWorkspaceModalAtom);
};
