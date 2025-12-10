import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const TopTenCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-[#fe3250] text-white p-6 font-sans relative overflow-hidden flex flex-col"
    >
      {/* Listicle Header */}
      <div className="bg-white text-black p-4 transform -rotate-1 shadow-lg mb-8 border-2 border-black">
        <div className="text-xs font-black uppercase tracking-widest bg-yellow-400 inline-block px-2 py-1 mb-1 border border-black">
          Trending Now
        </div>
        <h1 className="text-3xl font-black uppercase leading-none tracking-tight">
          Top 10 Things You Didn't Need To Read Today
        </h1>
      </div>

      {/* The "Number 1" Item */}
      <div className="flex-1 bg-white text-black p-0 border-2 border-black shadow-[8px_8px_0_rgba(0,0,0,0.2)] flex flex-col relative">
        {/* Image Frame */}
        <div className="h-[250px] w-full bg-zinc-200 border-b-2 border-black relative overflow-hidden">
          <img
            src={data.user.avatarUrl}
            className="w-full h-full object-cover grayscale contrast-125"
          />

          {/* Giant Number Badge */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400 flex items-center justify-center border-r-2 border-b-2 border-black z-10">
            <span className="text-6xl font-black italic tracking-tighter">
              #1
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col justify-center text-center">
          <div className="text-sm font-bold uppercase text-zinc-400 mb-2 tracking-widest">
            The Winner Is...
          </div>
          <div className="text-2xl font-bold leading-tight prose prose-p:my-0 max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>

          <div className="mt-6">
            <div className="inline-block bg-black text-white font-bold uppercase text-xs px-4 py-2 rounded-full cursor-pointer hover:bg-zinc-800">
              Read More &rarr;
            </div>
          </div>
        </div>

        {/* Fake Ad Banner at bottom */}
        <div className="border-t-2 border-black p-2 bg-zinc-100 text-center text-[10px] uppercase text-zinc-400 font-bold">
          Sponsored by 5-Minute Crafts
        </div>
      </div>
    </div>
  );
};
