import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Swords } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const VsScreenCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-black relative overflow-hidden flex items-center justify-center font-sans uppercase italic"
    >
      {/* Diagonal Split Background */}
      <div className="absolute inset-0 bg-blue-900 clip-path-polygon-[0_0,_60%_0,_40%_100%,_0_100%]"></div>
      <div className="absolute inset-0 bg-red-900 clip-path-polygon-[60%_0,_100%_0,_100%_100%,_40%_100%]"></div>

      {/* VS Badge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white border-[8px] border-black flex items-center justify-center z-30 shadow-[0_0_50px_rgba(255,255,255,0.5)]">
        <div className="text-6xl font-black text-black tracking-tighter italic pr-2 pt-2">
          VS
        </div>
      </div>

      {/* Player 1 (Left - Blue) */}
      <div className="w-1/2 h-full relative z-10 flex flex-col justify-center items-end pr-16 text-right">
        <img
          src={
            data.user.avatarUrl ||
            "https://api.dicebear.com/7.x/adventurer/svg?seed=P1"
          }
          alt={data.user.name}
          className="w-48 h-48 object-cover border-4 border-blue-500 shadow-[0_0_30px_#3b82f6] mb-4"
        />
        <div className="bg-blue-600 text-white px-4 py-1 text-2xl font-black transform -skew-x-12 shadow-lg mb-2">
          {data.user.name}
        </div>
        <div className="text-blue-300 font-bold tracking-widest text-sm">
          The Challenger
        </div>
      </div>

      {/* Player 2 (Right - Red - The Target/Topic) */}
      <div className="w-1/2 h-full relative z-10 flex flex-col justify-center items-start pl-16 text-left">
        <div className="w-48 h-48 bg-black/50 border-4 border-red-500 shadow-[0_0_30px_#ef4444] mb-4 flex items-center justify-center p-4">
          <div className="text-red-500 text-center font-black leading-tight overflow-hidden text-ellipsis prose prose-invert prose-p:my-0 break-words w-full h-full flex items-center justify-center">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
        <div className="bg-red-600 text-white px-4 py-1 text-2xl font-black transform skew-x-12 shadow-lg mb-2">
          BAD TAKE
        </div>
        <div className="text-red-300 font-bold tracking-widest text-sm">
          The Enemy
        </div>
      </div>

      {/* Random particles */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>
    </div>
  );
};
