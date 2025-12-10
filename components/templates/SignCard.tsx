import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const SignCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] relative flex flex-col items-center justify-center p-0 overflow-hidden"
    >
      {/* Background (Crowd/City Blur) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-sm scale-110"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop")',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* The Sign - Cardboard Texture */}
      <div className="relative z-10 w-[400px] min-h-[300px] bg-[#d2b48c] p-6 shadow-2xl transform rotate-1 border border-[#bfa17a] flex items-center justify-center text-center">
        {/* Cardboard Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-60 mix-blend-multiply pointer-events-none"></div>

        {/* Text - Marker Style */}
        <div
          className="relative z-20 font-handwriting font-bold text-4xl md:text-5xl uppercase text-[#1a1a1a] leading-none tracking-tight prose prose-p:my-0 max-w-none break-words w-full"
          style={{
            fontFamily: '"Permanent Marker", cursive',
            transform: "rotate(-1deg)",
          }}
        >
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        {/* Tape/Imperfections */}
        <div className="absolute -top-3 left-1/3 w-16 h-8 bg-zinc-200/50 rotate-3 backdrop-blur-sm shadow-sm"></div>
        <div className="absolute -bottom-3 right-1/3 w-16 h-8 bg-zinc-200/50 -rotate-2 backdrop-blur-sm shadow-sm"></div>
      </div>

      {/* Stick */}
      <div className="w-8 h-[300px] bg-[#5c4033] relative z-0 -mt-4 shadow-lg border-x border-[#3e2b22]"></div>

      {/* Hand holding it (Optional/Simplistic representation) */}
      {/* <div className="absolute bottom-0 w-32 h-32 bg-zinc-300 rounded-full blur-xl opacity-50 z-10"></div> */}

      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-black z-20 shadow">
        @{data.user.handle}
      </div>
    </div>
  );
};
