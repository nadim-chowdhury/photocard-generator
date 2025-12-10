import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { X, Minus, Square, AlertTriangle } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ErrorWindowCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#008080] p-12 flex items-center justify-center font-sans relative"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Multiple windows for 'glitch' effect behind */}
      <div className="absolute top-16 left-16 w-3/4 h-64 bg-zinc-300 border-2 border-white shadow-xl pointer-events-none opacity-50"></div>

      {/* Main Window */}
      <div className="w-full bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#404040] shadow-[4px_4px_0_rgba(0,0,0,0.5)] flex flex-col relative z-10">
        {/* Title Bar */}
        <div className="bg-[#000080] px-2 py-1 flex justify-between items-center text-white select-none">
          <div className="flex items-center gap-2 font-bold text-sm tracking-wide">
            <span className="font-mono">Critical_Roast.exe</span>
          </div>
          <div className="flex gap-0.5">
            <button className="w-5 h-5 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#404040] flex items-center justify-center text-black">
              <Minus size={12} strokeWidth={4} />
            </button>
            <button className="w-5 h-5 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#404040] flex items-center justify-center text-black">
              <Square size={10} strokeWidth={4} />
            </button>
            <button className="w-5 h-5 bg-[#c0c0c0] border-t border-l border-white border-b border-r border-[#404040] flex items-center justify-center text-black">
              <X size={14} strokeWidth={4} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex gap-6 items-start">
          <div className="shrink-0">
            <AlertTriangle
              size={64}
              className="text-[#ffff00] fill-[#ffff00] stroke-black"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">
              An error occurred in user: {data.user.handle}
            </h2>
            <div className="mb-4 text-black text-lg font-medium leading-normal prose prose-sm max-w-none break-words w-full">
              <p>System detected illegal levels of:</p>
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button className="px-8 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black font-bold uppercase active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:py-[5px] active:px-[31px]">
                Ignore
              </button>
              <button className="px-8 py-1 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black font-bold uppercase active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:py-[5px] active:px-[31px]">
                Report
              </button>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="border-t border-[#808080] p-1 text-xs text-[#808080] flex justify-between px-2">
          <span>Error Code: ID-10-T</span>
          <span>{data.user.name}</span>
        </div>
      </div>
    </div>
  );
};
