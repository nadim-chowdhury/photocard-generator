import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Crosshair, Shield, Zap, Skull } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const FpsHudCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-black text-white p-0 font-sans relative overflow-hidden flex flex-col justify-between"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Top Bar (Score/Time) */}
      <div className="relative z-10 flex justify-between p-6">
        <div className="bg-black/60 backdrop-blur border border-white/20 px-4 py-2 rounded-br-2xl skew-x-[-10deg] flex gap-4">
          <div className="transform skew-x-[10deg] font-bold text-xl text-yellow-500">
            TEAM {data.user.name.toUpperCase()}
          </div>
          <div className="transform skew-x-[10deg] font-mono text-xl">
            9999 pts
          </div>
        </div>
        <div className="bg-black/60 backdrop-blur border border-white/20 px-6 py-2 rounded-bl-2xl skew-x-[10deg]">
          <div className="transform skew-x-[-10deg] font-mono text-2xl font-bold text-red-500">
            00:30
          </div>
        </div>
      </div>

      {/* Center Crosshair & Killfeed */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <Crosshair size={48} className="text-white/50" />

        <div className="absolute top-20 right-6 flex flex-col gap-2 items-end">
          <div className="bg-black/50 px-3 py-1 rounded text-sm font-bold flex items-center gap-2">
            <span className="text-blue-400">{data.user.handle}</span>
            <Skull size={14} />
            <span className="text-red-400">Logic</span>
          </div>
          <div className="bg-black/50 px-3 py-1 rounded text-sm font-bold flex items-center gap-2 opacity-80">
            <span className="text-blue-400">{data.user.handle}</span>
            <Skull size={14} />
            <span className="text-red-400">Common Sense</span>
          </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="relative z-10 p-8 flex items-end gap-6">
        {/* Health/Armor */}
        <div className="flex-1 flex gap-4 items-end">
          <div className="bg-black/70 backdrop-blur p-4 rounded-tr-3xl border-l-4 border-l-green-500 w-64">
            <div className="flex items-center gap-2 text-green-400 mb-1 font-bold tracking-widest text-xs uppercase">
              <Shield size={14} /> Health
            </div>
            <div className="text-5xl font-black italic tracking-tighter">
              100
            </div>
          </div>
          <div className="bg-black/70 backdrop-blur p-4 rounded-tr-3xl border-l-4 border-l-blue-500 w-32">
            <div className="flex items-center gap-2 text-blue-400 mb-1 font-bold tracking-widest text-xs uppercase">
              <Zap size={14} /> Armor
            </div>
            <div className="text-4xl font-black italic tracking-tighter">
              50
            </div>
          </div>
        </div>

        {/* Chat Box (Content) */}
        <div className="w-[400px] bg-black/60 backdrop-blur p-4 rounded-tl-xl border border-white/10">
          <div className="text-yellow-500 font-bold text-xs mb-1 uppercase tracking-wider">
            [ALL] {data.user.handle}:
          </div>
          <div className="text-white text-lg font-medium leading-snug drop-shadow-md text-shadow-sm prose prose-invert max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};
