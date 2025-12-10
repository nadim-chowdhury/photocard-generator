import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Trophy, Gamepad2, Medal, Star } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const AchievementCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[250px] bg-[#101010] text-white p-6 relative font-sans flex items-center gap-6 rounded-full border-4 border-[#1f1f1f] shadow-2xl"
    >
      {/* Xbox-style Achievement Circle */}
      <div className="w-32 h-32 rounded-full bg-[#107c10] flex items-center justify-center shrink-0 border-4 border-[#2d2d2d] shadow-[0_0_30px_rgba(16,124,16,0.6)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <Trophy size={64} className="text-white drop-shadow-md" />

        {/* User Avatar Overlay (small) */}
        <div className="absolute bottom-3 right-3 z-50 w-10 h-10 rounded-full border-2 border-white overflow-hidden hidden">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/pixel-art/svg?seed=Gamer"
            }
            alt={data.user.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-[#107c10] text-sm font-bold uppercase tracking-widest mb-1">
          <Gamepad2 size={16} /> Achievement Unlocked
        </div>

        <h2 className="text-3xl font-bold mb-2 text-white leading-tight">
          {data.user.name}
        </h2>

        <div className="text-xl text-zinc-300 font-medium leading-relaxed prose prose-invert max-w-none break-words w-full">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="flex items-center gap-4 mt-3 text-zinc-500 text-xs font-bold uppercase">
          <div className="flex items-center gap-1">
            <Medal size={14} /> 1000G
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} /> Rare Achievement
          </div>
          <div className="">@{data.user.handle}</div>
        </div>
      </div>
    </div>
  );
};
