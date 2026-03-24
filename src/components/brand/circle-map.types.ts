import type { ReactNode } from "react";

export type CircleMapNode = {
  id: string;
  angle: number;
  title: string;
  note?: string;
  indexLabel?: string;
  sectionId?: string;
};

export type CircleMapProps = {
  nodes: CircleMapNode[];
  center: ReactNode;
  activeId?: string | null;
  onNodeEnter?: (id: string) => void;
  onNodeLeave?: () => void;
  onNodeClick?: (id: string) => void;
  enableRotation?: boolean;
  spinSeconds?: number;
  className?: string;
};
