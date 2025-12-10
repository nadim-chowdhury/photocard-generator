import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const NeonCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#050505] flex items-center justify-center p-12 relative overflow-hidden"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/dark-brick-wall.png")`,
      }}
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-pink-900/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center border-4 border-zinc-800/50 p-12 rounded-3xl bg-black/40 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Neon Text */}
        <div
          className="font-cursive text-5xl md:text-6xl leading-tight text-white prose prose-invert max-w-none break-words w-full"
          style={{
            textShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff00de, 0 0 30px #ff00de, 0 0 40px #ff00de, 0 0 55px #ff00de, 0 0 75px #ff00de",
          }}
        >
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        {/* Subtext (Broken Neon) */}
        <div className="mt-8 font-mono uppercase tracking-[0.5em] text-xs text-blue-200 opacity-60 flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-blue-500 shadow-[0_0_10px_#00f]"></span>
          <span>Open late</span>
          <span className="w-12 h-px bg-blue-500 shadow-[0_0_10px_#00f]"></span>
        </div>

        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-12 bg-black border border-zinc-800"></div>
        <div className="absolute -top-4 left-1/4 -translate-x-1/2 w-1 h-32 bg-zinc-900"></div>
        <div className="absolute -top-4 right-1/4 translate-x-1/2 w-1 h-32 bg-zinc-900"></div>
      </div>
    </div>
  );
};
