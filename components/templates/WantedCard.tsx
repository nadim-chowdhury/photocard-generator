import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const WantedCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-[#dcb180] text-[#3e2e1e] font-serif p-8 relative flex flex-col items-center text-center"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png")`,
      }}
    >
      <div className="border-[6px] border-[#3e2e1e] w-full h-full p-6 flex flex-col items-center relative">
        {/* Nail Hole */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full opacity-60 blur-[1px]"></div>

        <h1
          className="text-6xl font-black uppercase tracking-widest mb-2 scale-y-125"
          style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
        >
          WANTED
        </h1>
        <div className="text-xl font-bold uppercase tracking-[0.4em] mb-6">
          Dead or Alive
        </div>

        {/* Photo Frame */}
        <div className="w-full aspect-square bg-[#3e2e1e]/10 p-4 border-[3px] border-[#3e2e1e] mb-6 relative">
          <img
            src={data.user.avatarUrl}
            className="w-full h-full object-cover sepia contrast-150 brightness-90 grayscale"
          />
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(62,46,30,0.6)] pointer-events-none"></div>
          {/* Tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-zinc-100/40 rotate-1 backdrop-blur-sm"></div>
        </div>

        <div className="mt-2 w-full border-t-[3px] border-b-[3px] border-[#3e2e1e] py-2 mb-4">
          <h2 className="text-3xl font-bold uppercase tracking-wide">
            {data.user.name}
          </h2>
        </div>

        <div className="text-lg font-bold leading-snug uppercase mb-6 prose prose-p:my-0 max-w-none break-words w-full">
          <span className="text-sm block mb-1">For Crimes of:</span>
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="mt-auto">
          <div className="text-sm font-bold uppercase tracking-widest mb-1">
            Reward
          </div>
          <div
            className="text-5xl font-black tracking-tighter"
            style={{ fontFamily: "serif" }}
          >
            $0.01
          </div>
        </div>
      </div>
    </div>
  );
};
