import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { ChevronLeft, Share, MoreHorizontal } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const NotesCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-[#1c1c1e] text-white font-sans flex flex-col pt-12"
    >
      {/* iOS Status Bar Fake */}
      <div className="flex justify-between items-center px-6 text-yellow-500 mb-4">
        <div className="flex items-center gap-1 font-medium text-lg cursor-pointer">
          <ChevronLeft size={28} /> Folders
        </div>
        <div className="flex items-center gap-6">
          <Share size={24} />
          <div className="w-6 h-6 rounded-full border border-yellow-500 flex items-center justify-center">
            <MoreHorizontal size={16} />
          </div>
        </div>
      </div>

      <div className="px-8 flex-1">
        <div className="text-zinc-500 font-medium text-lg mb-4 text-center">
          Today at 3:42 AM
        </div>

        <div className="text-2xl leading-relaxed font-normal whitespace-pre-wrap text-zinc-100 prose prose-invert prose-p:text-zinc-100 prose-strong:text-white max-w-none break-words w-full">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>
      </div>

      {/* Keyboard Toolbar (Fake) */}
      <div className="mt-12 bg-[#2c2c2e] p-3 flex justify-between items-center px-6 text-zinc-400">
        <div className="flex gap-6">
          <div className="w-6 h-6 border-2 border-zinc-500 rounded-sm"></div>
          <div className="font-serif italic font-bold text-xl">Aa</div>
        </div>
        <div className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
          Done
        </div>
      </div>
    </div>
  );
};
