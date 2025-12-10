import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Box, HelpCircle } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const InventoryCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-transparent p-8 font-sans flex items-center justify-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1614726365723-49cfae96a6d6?q=80&w=2070&auto=format&fit=crop")`, // Blurry game background
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Tooltip Box */}
      <div className="relative z-10 w-[450px] bg-[#1a1c23]/95 border border-[#484b5b] shadow-2xl rounded text-[#adb1c4] p-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="w-16 h-16 bg-[#0f1115] border border-[#2f323e] flex items-center justify-center shrink-0">
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/identicon/svg?seed=Item"
              }
              alt={data.user.name}
              className="w-12 h-12"
            />
          </div>
          <div>
            <h1 className="text-[#a335ee] font-bold text-xl drop-shadow-md">
              {data.user.name}'s Opinion
            </h1>
            <div className="text-xs uppercase tracking-wider text-[#a335ee]/80 font-bold mb-1">
              Epic Consumable
            </div>
            <div className="text-xs">Item Level 1</div>
          </div>
        </div>

        <div className="w-full h-px bg-[#2f323e]"></div>

        <div className="text-sm space-y-1 text-[#20c20e]">
          <div>+0 Intelligence</div>
          <div>+100 Confusion</div>
          <div>-50 Reputation</div>
          <div>Equip: Makes you look silly.</div>
        </div>

        <div className="w-full h-px bg-[#2f323e]"></div>

        <div className="text-[#ffd100] text-sm italic leading-relaxed prose prose-invert prose-p:my-0 max-w-none break-words w-full">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="w-full h-px bg-[#2f323e]"></div>

        <div className="text-xs text-[#adb1c4]/60 flex justify-between">
          <span>Sell Price: 1 Copper</span>
          <span>Durability: 0/100</span>
        </div>
      </div>
    </div>
  );
};
