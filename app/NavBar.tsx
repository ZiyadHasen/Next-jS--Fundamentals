import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Navigation = ({ children }: Props) => {
  return (
    <>
      <div className='flex bg-slate-200 p-3 '>
        <Link href='/' className='mr-5'>
          Next.js
        </Link>
        <Link href='/users' className='mr-5'>
          users
        </Link>

        <div>{children}</div>
      </div>
    </>
  );
};

export default Navigation;
