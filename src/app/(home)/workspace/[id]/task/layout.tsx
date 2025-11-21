'use client';

import Topbar from '@/components/dashboard/Topbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen relative transition-all duration-300 bg-background">
      <div className="sticky top-0 z-40 w-full">
        <Topbar />
        <div className="px-4 md:px-8 py-4">{children}</div>
      </div>
    </main>
  );
}
