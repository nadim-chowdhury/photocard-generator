import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Flame, Shield, Skull, Sword } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const TcgCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[400px] min-h-[600px] bg-[#1a1a1a] p-3 font-serif rounded-[24px] relative shadow-2xl flex flex-col"
    >
      {/* Card Border/Frame */}
      <div className="w-full flex-1 bg-[#f4d03f] rounded-[18px] p-2 flex flex-col relative overflow-hidden">
        {/* Holo Effect Overlay */}
        <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none z-20 mix-blend-overlay"></div>

        {/* Header */}
        <div className="bg-[#fff] border-b-2 border-[#caa41b] p-2 rounded-t-lg flex justify-between items-center z-10">
          <h2 className="font-bold text-lg uppercase tracking-tight text-black truncate pr-2 w-3/4">
            {data.user.name}
          </h2>
          <div className="flex items-center gap-1 text-red-600 font-black text-xl">
            <Flame size={20} fill="currentColor whitespace-nowrap" />
            <span>9999 HP</span>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-64 bg-zinc-900 border-x-4 border-[#caa41b] relative z-10 overflow-hidden">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/pixel-art/svg?seed=TCG"
            }
            alt={data.user.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats Bar */}
        <div className="bg-[#e0c242] py-1 px-2 flex justify-between text-xs font-bold text-[#4a3b00] border-b-2 border-[#b59218] z-10 uppercase">
          <span>Legendary MEME-Type</span>
          <span>Edition 1st</span>
        </div>

        {/* Ability / Text */}
        <div className="bg-[#fcf5c7] flex-1 p-3 border-x-2 border-b-2 border-[#caa41b] rounded-b-lg relative z-10">
          <div className="mb-4">
            <div className="flex items-center gap-2 font-bold text-sm mb-1 text-black">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span>ULTIMATE ROAST</span>
            </div>
            <div className="text-sm leading-snug text-zinc-900 font-medium prose prose-sm max-w-none break-words w-full">
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>
          </div>

          <div className="border-t border-[#caa41b]/50 pt-2 italic text-[#665c2e] text-xs text-center">
            "@{data.user.handle} played this card and ended the entire debate
            instantly."
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="ml-auto z-30 bg-white border-2 border-black rounded-full px-3 py-1 font-black text-black text-lg flex items-center gap-2 shadow-md my-2">
          <Sword size={16} /> 3000 / <Shield size={16} /> 2500
        </div>
      </div>
    </div>
  );
};
