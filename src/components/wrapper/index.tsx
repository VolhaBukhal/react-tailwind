import { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto py-4 px-1.5 min-h-screen ">
      {children}
    </div>
  );
};
