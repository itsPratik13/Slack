'use client';

import { useParams } from 'next/navigation';

import type { Id } from '../../convex/_generated/dataModel';

type WorkspaceIdParams = {
  workspaceId: Id<'workspaces'>;
};

export const useWorkspaceId = () => {
  const params = useParams<WorkspaceIdParams>();

  return params.workspaceId;
};