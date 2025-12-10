import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Music, BarChart, Clock } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const WrappedCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[450px] min-h-[600px] bg-[#8a2be2] text-white p-8 font-sans flex flex-col items-center justify-between relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 100%, #ff00ff 0%, #8a2be2 50%, #0000ff 100%)",
      }}
    >
      {/* Geometric Shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-pink-500 rounded-full mix-blend-overlay opacity-50 blur-xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay opacity-50 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20"></div>

      {/* Header */}
      <div className="relative z-10 w-full flex justify-between items-center -rotate-2">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter drop-shadow-lg">
          Your Time
          <br />
          Wasted
        </h1>
        <div className="text-right font-bold font-mono bg-black text-white px-2 py-1 rotate-2">
          2024
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center my-8">
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 w-full border border-white/20 shadow-2xl skew-y-2">
          <div className="text-xs uppercase font-bold tracking-widest text-pink-200 mb-2 text-center">
            Top Genre: Delusion
          </div>

          <div className="text-center font-bold text-2xl leading-snug prose prose-invert prose-p:my-0 max-w-none break-words w-full text-shadow-sm">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 w-full grid grid-cols-2 gap-4">
        <div className="bg-black text-white p-4 rounded-xl flex flex-col gap-2 shadow-lg">
          <div className="text-xs font-bold uppercase text-yellow-400">
            Total Minutes
          </div>
          <div className="text-2xl font-black font-mono">99,999</div>
        </div>
        <div className="bg-[#ff0099] text-white p-4 rounded-xl flex flex-col gap-2 shadow-lg">
          <div className="text-xs font-bold uppercase text-white/80">
            Top Artist
          </div>
          <div className="text-xl font-black truncate">{data.user.name}</div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-8 w-full border-t border-white/30 pt-4 flex justify-between items-center opacity-80">
        <div className="text-xs font-bold uppercase tracking-widest">
          Wrapped
        </div>
        <div className="flex gap-2">
          <div className="w-1 h-6 bg-white"></div>
          <div className="w-1 h-6 bg-white/50"></div>
          <div className="w-1 h-6 bg-white/30"></div>
        </div>
      </div>
    </div>
  );
};
