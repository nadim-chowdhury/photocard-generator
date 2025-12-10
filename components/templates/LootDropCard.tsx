import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Sparkles, Star } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const LootDropCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[500px] bg-[#09090b] text-white p-0 font-serif relative overflow-hidden flex flex-col items-center justify-end pb-12"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 100%, #301a00 0%, #09090b 60%)",
      }}
    >
      {/* Light Beam */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-t from-[#ff8000] to-transparent h-[150%] blur-xl opacity-80"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-t from-[#ff8000]/30 to-transparent h-[80%] blur-2xl"></div>

      {/* Item Card */}
      <div className="relative z-10 w-[400px] border border-[#ff8000]/50 bg-black/80 backdrop-blur-sm p-1 shadow-[0_0_50px_rgba(255,128,0,0.3)]">
        {/* Header */}
        <div className="bg-[#1a0f00] p-4 border-b border-[#ff8000]/30 flex justify-between items-start">
          <div>
            <h1 className="text-[#ff8000] text-2xl font-bold uppercase tracking-wide drop-shadow-[0_0_5px_rgba(255,128,0,0.8)]">
              {data.user.name}'s Post
            </h1>
            <div className="text-xs text-[#ff8000]/70 uppercase tracking-widest font-sans font-bold flex items-center gap-1">
              Legendary Trash <Star size={10} fill="currentColor" />
            </div>
          </div>
          <div className="w-10 h-10 border border-[#ff8000] bg-black">
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/identicon/svg?seed=Loot"
              }
              alt={data.user.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Box */}
        <div className="p-4 space-y-4 font-sans text-sm font-medium">
          <div className="flex justify-between text-[#ff8000]">
            <span>Item Level 1</span>
            <span>Bind on Pickup</span>
          </div>

          <div className="space-y-1 text-white/90">
            <div>Main Hand</div>
            <div>Attack Speed: Slow</div>
            <div>0.0 Damage per second</div>
          </div>

          <div className="text-[#00ff00]">+5 to Audit Log</div>
          <div className="text-[#00ff00]">
            Equip: Your reputation decreases by 100.
          </div>

          <div className="text-[#ffd700] italic leading-relaxed prose prose-invert prose-p:my-0 max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>

          <div className="text-[#ff8000]/60 text-xs">
            "You found this on the floor of the internet."
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 flex gap-2 text-[#ff8000] animate-bounce">
        <Sparkles size={16} />{" "}
        <span className="text-xs font-bold font-sans uppercase">
          Press F to Pickup
        </span>{" "}
        <Sparkles size={16} />
      </div>
    </div>
  );
};
