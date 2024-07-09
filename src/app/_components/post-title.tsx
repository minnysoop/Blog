import { ReactNode } from "react";
import Link from 'next/link'

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <>
    <div className="text-center mb-12">
      <h1 className="text-2xl font-bold tracking-tighter mb-4">
        {children}
      </h1>
      <div>
        <Link href={`/`} className="hover:underline">
            Back to Blog
        </Link>
      </div>
    </div>
    </>
  );
}
