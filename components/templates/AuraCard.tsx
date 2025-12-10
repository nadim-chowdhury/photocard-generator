import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const AuraCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] flex items-center justify-center p-12 text-center"
      style={{
        background:
          "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)", // Fallback
        backgroundImage:
          "radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%), radial-gradient(at 0% 50%, hsla(339,49%,30%,1) 0, transparent 50%), radial-gradient(at 100% 50%, hsla(339,49%,30%,1) 0, transparent 50%), radial-gradient(at 0% 100%, hsla(339,49%,30%,1) 0, transparent 50%), radial-gradient(at 50% 100%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 100%, hsla(253,16%,7%,1) 0, transparent 50%)",
      }}
    >
      {/* Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-40 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 w-full drop-shadow-2xl">
        <div
          className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tight prose prose-invert prose-p:my-0 max-w-none break-words w-full"
          style={{ textShadow: "0 0 40px rgba(0,0,0,0.5)" }}
        >
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 opacity-90">
          <div className="w-8 h-8 rounded-full border border-white/50 overflow-hidden">
            <img
              src={data.user.avatarUrl}
              alt={data.user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white font-medium text-sm tracking-widest uppercase">
            {data.user.handle}
          </span>
        </div>
      </div>
    </div>
  );
};
