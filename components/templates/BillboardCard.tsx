import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Megaphone } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const BillboardCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] relative font-sans flex items-center justify-center p-0 bg-sky-300"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1596796593532-6a840902c332?q=80&w=2070&auto=format&fit=crop")`, // Sky/City background
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      {/* Billboard Stucture */}
      <div className="relative z-10 w-[450px] bg-white border-[10px] border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col transform perspective-[1000px] rotate-y-[-5deg] rotate-x-[5deg]">
        {/* Top Lights */}
        <div className="absolute -top-6 left-0 w-full flex justify-around">
          <div className="w-4 h-6 bg-black"></div>
          <div className="w-4 h-6 bg-black"></div>
          <div className="w-4 h-6 bg-black"></div>
        </div>

        {/* Billboard Content */}
        <div className="bg-white p-6 min-h-[200px] flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Paper Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 mix-blend-multiply"></div>

          <h1 className="relative z-10 text-4xl font-black uppercase text-black leading-none mb-4 tracking-tighter">
            WE NEED TO TALK ABOUT
          </h1>

          <div className="relative z-10 text-2xl font-bold text-red-600 uppercase leading-tight bg-yellow-300 px-4 py-2 transform -rotate-1 shadow-sm border-2 border-black prose prose-sm max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>

          <div className="relative z-10 mt-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">
            Call {data.user.handle} for more bad takes
          </div>
        </div>

        {/* Bottom Platform/Frame */}
        <div className="h-4 bg-zinc-800 w-full"></div>
      </div>

      {/* Pole */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[120px] bg-gradient-to-r from-zinc-800 to-zinc-600 z-0"></div>
    </div>
  );
};
