import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Cpu } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const CreditCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] h-[350px] bg-black text-white font-mono p-8 rounded-[24px] relative overflow-hidden shadow-2xl"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-black"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>

      {/* Bank Name */}
      <div className="relative z-10 flex justify-between items-start mb-8">
        <h1 className="text-2xl font-bold italic tracking-widest uppercase text-zinc-100">
          Bank of Ls
        </h1>
        <div className="text-right text-xs text-zinc-400 font-bold uppercase">
          Platinum Debit <br />{" "}
          <span className="text-red-500 text-lg">DECLINED</span>
        </div>
      </div>

      {/* Chip & NFC */}
      <div className="relative z-10 flex items-center gap-4 mb-8">
        <div className="w-16 h-12 bg-[#d4af37] rounded-md border border-[#bfa136] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/20"></div>
          <div className="absolute inset-y-0 left-1/3 w-[1px] bg-black/20"></div>
          <div className="absolute inset-y-0 right-1/3 w-[1px] bg-black/20"></div>
        </div>
        <Cpu size={32} className="rotate-90 text-white/50" />
      </div>

      {/* Card Number (The Content) */}
      <div className="relative z-10 mb-6">
        <div className="text-xl font-medium tracking-widest drop-shadow-md text-zinc-300 prose prose-invert prose-p:my-0 max-w-none break-words w-full h-[60px] overflow-hidden">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>
      </div>

      {/* Cardholder Info */}
      <div className="relative z-10 flex justify-between items-end mt-auto">
        <div className="uppercase">
          <div className="text-[8px] text-zinc-500 font-bold mb-0.5">
            Card Holder
          </div>
          <div className="text-lg font-medium tracking-widest">
            {data.user.name.substring(0, 20)}
          </div>
        </div>
        <div className="uppercase text-right">
          <div className="text-[8px] text-zinc-500 font-bold mb-0.5">
            Valid Thru
          </div>
          <div className="text-lg font-medium tracking-widest">NEVER</div>
        </div>
        <div className="w-16">
          <div className="w-8 h-8 rounded-full bg-red-500/80 absolute right-8 bottom-8"></div>
          <div className="w-8 h-8 rounded-full bg-orange-500/80 absolute right-12 bottom-8"></div>
        </div>
      </div>
    </div>
  );
};
