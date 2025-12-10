import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Gavel, DollarSign, Clock } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const AuctionCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-white text-black font-serif p-8 border-[12px] border-zinc-900 shadow-2xl relative flex flex-col"
    >
      <div className="border border-zinc-300 h-full p-4 flex flex-col text-center">
        <div className="flex justify-center mb-2 opacity-50">
          <Gavel size={48} />
        </div>

        <h1 className="text-2xl font-bold uppercase tracking-widest mb-1 font-sans">
          Sotheby's of Shame
        </h1>
        <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 font-sans">
          Lot #404 • Rare Artifact
        </div>

        {/* Item Display */}
        <div className="w-[80%] aspect-square mx-auto bg-zinc-100 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] p-8 mb-6 relative border border-zinc-200">
          <div className="w-full h-full bg-white shadow-lg p-2 transform rotate-2">
            <img
              src={data.user.avatarUrl}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Sold Tag overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] bg-red-600 text-white font-black text-6xl uppercase tracking-widest transform -rotate-12 border-4 border-white shadow-xl opacity-90">
            SOLD!
          </div>
        </div>

        <div className="text-sm font-bold uppercase text-zinc-400 mb-2 font-sans tracking-widest">
          Description
        </div>

        <div className="text-lg italic font-medium leading-relaxed prose prose-p:my-0 max-w-none break-words w-full mb-6 font-serif px-4">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        {/* Price Info */}
        <div className="mt-auto border-t border-zinc-300 pt-4 flex justify-around">
          <div className="flex flex-col items-center">
            <div className="text-xs font-bold uppercase text-zinc-400 mb-1 font-sans">
              Final Price
            </div>
            <div className="text-3xl font-black font-sans flex items-start">
              <span className="text-sm mt-1">$</span> 0.00
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs font-bold uppercase text-zinc-400 mb-1 font-sans">
              Buyer
            </div>
            <div className="text-xl font-bold font-serif italic">Nobody</div>
          </div>
        </div>
      </div>
    </div>
  );
};
