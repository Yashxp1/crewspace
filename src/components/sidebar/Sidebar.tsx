import { ChevronsRight, Plug } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-11 h-screen border-r flex justify-center py-14 ">
      <div className="flex flex-col justify-between">
        <div>
          <div className="rounded-full  hover:bg-zinc-200 transition-all hover:dark:bg-zinc-800 h-fit p-2 ">
            <Link href="/integration">
              <Plug strokeWidth={1.7} size={20} />
            </Link>
          </div>
          <div></div>
        </div>
        <div className="rounded-full hover:bg-zinc-200 transition-all hover:dark:bg-zinc-800 h-fit p-2 ">
          <ChevronsRight strokeWidth={1.7} size={20} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
