import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Moon, Star, Sparkles } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const HoroscopeCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-[#1a1025] text-[#e0c0ff] font-serif relative overflow-hidden flex flex-col items-center justify-center p-8 text-center"
    >
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-white/20 animate-pulse">
          <Star size={12} fill="currentColor" />
        </div>
        <div className="absolute top-20 right-20 text-white/30">
          <Star size={8} fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-8 text-white/10">
          <Star size={16} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-10 text-white/20 animate-pulse delay-700">
          <Star size={10} fill="currentColor" />
        </div>

        {/* Zodiac Wheel Overlay */}
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full border border-white/5 opacity-10 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] rounded-full border border-white/5 opacity-10 animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 border border-[#e0c0ff]/30 p-8 rounded-full aspect-square flex flex-col items-center justify-center bg-[#1a1025]/50 backdrop-blur-sm shadow-[0_0_50px_rgba(168,85,247,0.2)]">
        <div className="mb-4 text-[#a855f7]">
          <Moon size={48} />
        </div>

        <div className="text-xs font-bold uppercase tracking-[0.3em] mb-2 text-[#a855f7]">
          Daily Horoscope
        </div>

        <h1 className="text-5xl font-black uppercase tracking-tight mb-2 text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          CLOWN
        </h1>

        <div className="w-12 h-px bg-[#a855f7] mb-6"></div>

        <div className="text-lg leading-relaxed italic opacity-90 prose prose-invert prose-p:my-0 max-w-none break-words w-[80%]">
          "The stars align to say:{" "}
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>"
        </div>

        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#a855f7]/80">
          <Sparkles size={14} />
          <span>Lucky Number: 0</span>
          <Sparkles size={14} />
        </div>
      </div>

      <div className="absolute bottom-8 text-xs font-mono text-[#a855f7]/50">
        @{data.user.handle} • rising moon • falling dignity
      </div>
    </div>
  );
};
