import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-2xl text-center font-bold tracking-tighter  mb-12">
      {children}
    </h1>
  );
}
