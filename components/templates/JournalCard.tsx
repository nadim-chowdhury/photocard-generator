import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const JournalCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-white text-black font-serif p-8 relative"
    >
      {/* Header Info */}
      <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-6">
        <div className="text-xs uppercase font-bold tracking-widest text-zinc-500">
          The Journal of Questionable Logic
          <br />
          Vol. 42, No. 69, pp. 1-1337
        </div>
        <div className="text-right text-xs font-mono text-zinc-400">
          doi:10.1337/bad-take
        </div>
      </div>

      {/* Branding */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold leading-tight mb-2 text-justify">
          A Comprehensive Analysis of Why @{data.user.handle} Is Always Arguing
          on the Internet
        </h1>
        <div className="text-sm italic text-zinc-600 mb-4">
          {data.user.name}, PhD in Yapping*
        </div>
        <div className="text-[10px] text-zinc-400 mb-6">
          * Department of misinformation, University of Social Media
        </div>
      </div>

      {/* Abstract */}
      <div className="mb-6">
        <div className="font-bold text-sm uppercase tracking-widest mb-2">
          Abstract
        </div>
        <div className="text-sm leading-relaxed text-justify px-4 prose prose-sm max-w-none break-words w-full">
          <span className="font-bold">Background: </span>
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>
      </div>

      {/* Figure */}
      <div className="border border-zinc-200 p-2 mb-4 bg-zinc-50">
        <div className="grid grid-cols-2 gap-2 h-32">
          <img
            src={data.user.avatarUrl}
            className="w-full h-full object-cover grayscale opacity-80"
          />
          <div className="bg-zinc-200 w-full h-full flex flex-col justify-end p-2">
            <div className="h-1/4 w-full bg-black mb-1"></div>
            <div className="h-1/2 w-full bg-zinc-400 mb-1"></div>
            <div className="h-3/4 w-full bg-zinc-300"></div>
          </div>
        </div>
        <div className="mt-2 text-[10px] font-bold text-zinc-500 text-center">
          Fig 1. Correlation between free time and posting frequency.
        </div>
      </div>

      <div className="mt-auto border-t border-black pt-2 text-[10px] text-zinc-400 text-center">
        © 2024 The Institute of Internet Discourse. All rights reserved.
      </div>
    </div>
  );
};
