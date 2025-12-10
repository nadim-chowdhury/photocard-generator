import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Shield, Sword, Activity, Eye, Zap } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const RtsTooltipCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#0b121e] text-[#4ed9f0] p-6 font-sans border-2 border-[#1c3857] shadow-[0_0_30px_rgba(78,217,240,0.1)] relative"
    >
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#1c3857 1px, transparent 1px), linear-gradient(90deg, #1c3857 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 flex gap-6 h-full">
        {/* Wireframe Portrait */}
        <div className="w-1/3 flex flex-col gap-2">
          <div className="w-full aspect-square border border-[#1c3857] bg-black/50 relative overflow-hidden group">
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/bottts/svg?seed=RTS"
              }
              alt={data.user.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale cyan-filter"
            />
            <div className="absolute inset-0 border-[1px] border-[#4ed9f0]/30 scanner-line"></div>
          </div>
          <div className="text-center font-bold text-xs uppercase tracking-widest bg-[#1c3857]/50 py-1">
            Unit Selection
          </div>
        </div>

        {/* Stats & Lore */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold uppercase tracking-widest text-white mb-1">
            {data.user.handle}
          </h1>
          <div className="text-xs text-[#4ed9f0]/70 mb-4 font-mono uppercase">
            Class: Keyboard Commander
          </div>

          <div className="grid grid-cols-2 gap-2 mb-6 text-sm font-mono">
            <div className="flex justify-between border-b border-[#1c3857] pb-1">
              <span className="text-[#4ed9f0]/70">Shields</span>
              <span className="text-white font-bold">0%</span>
            </div>
            <div className="flex justify-between border-b border-[#1c3857] pb-1">
              <span className="text-[#4ed9f0]/70">Damage</span>
              <span className="text-white font-bold">1 (Emotional)</span>
            </div>
            <div className="flex justify-between border-b border-[#1c3857] pb-1">
              <span className="text-[#4ed9f0]/70">Speed</span>
              <span className="text-white font-bold">Very Slow</span>
            </div>
            <div className="flex justify-between border-b border-[#1c3857] pb-1">
              <span className="text-[#4ed9f0]/70">Cost</span>
              <span className="text-white font-bold">Free</span>
            </div>
          </div>

          <div className="flex-1 border border-[#1c3857] bg-black/30 p-3 text-sm leading-relaxed text-[#a8b5c9] font-medium prose prose-invert max-w-none break-words w-full">
            <div className="text-[#4ed9f0] text-xs font-bold uppercase mb-2 flex items-center gap-2">
              <Activity size={12} /> Lore Entry:
            </div>
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
      </div>

      {/* Command Card Buttons (Fake) */}
      <div className="absolute bottom-6 right-6 w-32 grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-[#1c3857]/50 border border-[#4ed9f0]/20 hover:bg-[#4ed9f0]/20 transition-colors"
          ></div>
        ))}
      </div>
    </div>
  );
};
