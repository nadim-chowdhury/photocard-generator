import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ImpactCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-[#ff2e00] text-white p-8 font-sans flex flex-col justify-between"
    >
      {/* Swiss Style Grid Lines */}
      <div className="absolute top-8 left-0 w-full h-px bg-white"></div>
      <div className="absolute bottom-16 left-0 w-full h-px bg-white"></div>

      <div className="flex justify-between items-start pt-4">
        <h1 className="text-8xl font-black leading-none tracking-tighter mix-blend-screen opacity-50">
          01
        </h1>
        <div className="text-right font-bold uppercase text-xs tracking-widest leading-loose">
          Viral Typography
          <br />
          Collection
          <br />
          2024
        </div>
      </div>

      <div className="relative z-10 py-12">
        <div className="text-5xl font-black uppercase leading-[0.9] tracking-tighter break-words hyphens-auto prose prose-invert prose-p:my-0 max-w-none w-full">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>
      </div>

      <div className="flex justify-between items-end pb-2">
        <div className="text-xs font-bold uppercase tracking-widest">
          Post by @{data.user.handle}
        </div>
        <div className="w-16 h-16 bg-white rounded-full mix-blend-screen"></div>
      </div>
    </div>
  );
};
