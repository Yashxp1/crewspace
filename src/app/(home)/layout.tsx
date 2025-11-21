import Sidebar from '@/components/sidebar/Sidebar';
import { AppProviders } from '@/providers/AppProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.className} antialiased text-zinc-800 dark:text-zinc-200`}
    >
      <div className="flex w-full">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full">
          <AppProviders>
            <main>{children}</main>
          </AppProviders>
        </div>
      </div>
    </div>
  );
}
