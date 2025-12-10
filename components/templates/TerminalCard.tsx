import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Terminal } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const TerminalCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#0c0c0c] p-4 font-mono text-[#0f0] rounded-lg shadow-2xl border border-[#333] flex flex-col"
    >
      {/* Title Bar */}
      <div className="bg-[#1f1f1f] p-2 rounded-t flex items-center justify-between border-b border-[#333] mb-4">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Terminal size={14} />
          <span>bash — {data.user.handle}</span>
        </div>
        <div className="flex gap-2 px-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-4 relative overflow-hidden">
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-20"></div>

        <div className="text-lg leading-relaxed font-bold relative z-10 text-shadow-glow">
          <span className="text-blue-400">root@{data.user.handle}</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$</span>
          <span className="text-[#0f0] ml-2">
            echo "{data.content.substring(0, 20)}..."
          </span>

          <div className="mt-4 text-[#0f0] prose prose-invert prose-p:my-1 max-w-none break-words w-full shadow-[0_0_10px_rgba(0,255,0,0.6)]">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>

          <div className="mt-4 flex items-center gap-1 animate-pulse">
            <span className="text-blue-400">root@{data.user.handle}</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$</span>
            <span className="w-3 h-5 bg-[#0f0] inline-block ml-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
