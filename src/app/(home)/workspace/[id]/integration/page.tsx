import { Button } from '@/components/ui/button';
import { ArrowLeft, Ellipsis, Layers, Link2, Minus, Plug } from 'lucide-react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiLinear, SiNotion } from 'react-icons/si';

const page = () => {
  return (
    <div className="flex justify-between ">
      <div className="border-r h-screen w-72  ">
        <div className=" p-2 ">
          <Button variant="ghost" className="text-xs">
            <ArrowLeft size={15} />
            Back
          </Button>
        </div>
        <div className="py-2">
          <h1 className="border py-1 mb-6 dark:bg-zinc-900/80 bg-zinc-100  text-sm rounded-sm mx-4 text-center">
            Available integrations
          </h1>

          <div className="flex flex-col mx-4 gap-2">
            <Button>
              <FaGithub />
              Github
            </Button>
            <Button>
              <SiNotion />
              Notion
            </Button>
            <Button>
              <SiLinear />
              Linear
            </Button>
          </div>
          
        </div>
      </div>
      <div className=" w-full dark:bg-zinc-900/50 bg-zinc-100/50">
        <div className="flex justify-center items-center h-screen">
          <Plug size={32} strokeWidth={1.7} className="text-zinc-400" />
          <Minus size={32} strokeWidth={1.7} className="text-zinc-400" />
          <Ellipsis size={32} strokeWidth={1.7} className="text-zinc-400" />
          <Link2 size={28} strokeWidth={1.7} className="text-zinc-400" />
          <Ellipsis size={32} strokeWidth={1.7} className="text-zinc-400" />
          <Minus size={32} strokeWidth={1.7} className="text-zinc-400" />
          <Layers size={30} strokeWidth={1.7} className="text-zinc-400" />
        </div>
      </div>
    </div>
  );
};

export default page;
