import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Coins, ShoppingBag, ArrowLeft } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ItemShopCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#2d1b14] text-[#e2d5c5] font-serif p-8 border-[6px] border-[#8b6c42] rounded-lg relative shadow-xl"
    >
      {/* Wood Texture Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>

      <div className="flex justify-between items-center mb-6 border-b-2 border-[#5c4033] pb-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#1a0f0a] border-2 border-[#8b6c42] p-2 rounded">
            <ShoppingBag size={24} className="text-[#ffd700]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#ffd700] uppercase tracking-wider text-shadow-sm">
              Rare Merchant
            </h1>
            <div className="text-xs text-[#a08b7d]">
              "Got some rare things on sale, stranger!"
            </div>
          </div>
        </div>
        <div className="bg-[#1a0f0a]/50 px-4 py-1 rounded-full border border-[#8b6c42] flex items-center gap-2 font-mono text-[#ffd700]">
          <Coins size={16} />
          <span>5,402 G</span>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Item Preview */}
        <div className="w-1/3 bg-[#1a0f0a] border-4 border-[#5c4033] rounded p-2 flex flex-col items-center gap-2">
          <div className="w-full aspect-square bg-[#2d1b14] border border-[#5c4033] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/bottts/svg?seed=Shop"
              }
              alt={data.user.name}
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
          <div className="text-center w-full">
            <div className="text-[#a08eff] font-bold text-sm uppercase">
              Legendary Item
            </div>
            <div className="text-[#ffd700] font-mono text-lg flex justify-center items-center gap-1">
              <Coins size={14} /> 999,999
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#e2d5c5] mb-2">
            {data.user.handle}'s Hot Take
          </h2>
          <div className="bg-[#1a0f0a]/80 p-4 rounded border border-[#5c4033] min-h-[150px] text-sm leading-relaxed mb-4 prose prose-invert prose-p:text-[#e2d5c5] max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xs text-[#8b6c42]">
              Requires: Level 99 Intelligence
            </div>
            <button className="bg-[#2d5c2d] hover:bg-[#3d7c3d] text-white px-8 py-2 font-bold uppercase border-2 border-[#5c9c5c] shadow-lg active:translate-y-1 transition-all">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
