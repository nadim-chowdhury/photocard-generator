import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const BoardCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-white border-[12px] border-zinc-300 shadow-xl rounded-xl relative p-8 flex flex-col"
    >
      {/* Frame Detail */}
      <div className="absolute inset-0 border border-zinc-100 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-zinc-200 border-t border-zinc-300 shadow-inner flex items-center px-8 gap-2">
        <div className="w-16 h-2 bg-blue-600 rounded-full shadow-sm"></div>
        <div className="w-16 h-2 bg-red-600 rounded-full shadow-sm"></div>
        <div className="w-12 h-3 bg-black rounded shadow-sm opacity-80"></div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex items-center justify-center text-center p-4">
        <div
          className="font-handwriting text-4xl md:text-5xl text-blue-900 leading-snug prose prose-p:my-0 max-w-none break-words w-full transform -rotate-1"
          style={{
            fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
          }}
        >
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>
      </div>

      {/* Sticky Note */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-yellow-200 shadow-md transform rotate-3 flex items-center justify-center p-2 text-center">
        <div className="font-handwriting text-sm font-bold text-yellow-900 leading-tight">
          Don't forget to follow @{data.user.handle}!
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-yellow-400/50 blur-[1px]"></div>
      </div>
    </div>
  );
};
