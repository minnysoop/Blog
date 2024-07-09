import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-center">
      {children}
    </h1>
  );
}
