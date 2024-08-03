import { ReactNode } from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-center'>
      {children}
    </main>
  );
}
