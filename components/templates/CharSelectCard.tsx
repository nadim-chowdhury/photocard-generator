import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Users, Lock, Star } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const CharSelectCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#120024] text-white p-6 font-sans flex flex-col items-center relative overflow-hidden"
      style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #200040 2px, #200040 4px)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ff00ff]/20 to-transparent"></div>

      <h1 className="text-4xl font-black italic uppercase tracking-tighter text-[#ff00ff] mb-6 drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] relative z-10 text-center">
        Select Your Character
      </h1>

      <div className="flex gap-8 w-full z-10 px-8">
        {/* Character Portrait (Selected) */}
        <div className="w-1/3 flex flex-col items-center gap-2">
          <div className="w-full aspect-[3/4] border-4 border-[#ffff00] bg-black relative overflow-hidden shadow-[0_0_20px_#ffff00]">
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/pixel-art/svg?seed=Fighter"
              }
              alt={data.user.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#ffff00] text-black font-black text-center text-sm py-1 uppercase">
              P1 Selected
            </div>
          </div>
        </div>

        {/* Stats / Info */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-black/50 border border-white/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
            <h2 className="text-3xl font-black uppercase italic mb-1 text-white">
              {data.user.name}
            </h2>
            <div className="text-[#00ffff] font-mono text-sm mb-4">
              Class: Keyboard Warrior
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase">
                <span className="w-16">Attack</span>
                <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-[#ff0000]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase">
                <span className="w-16">Defense</span>
                <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[10%] h-full bg-[#00ff00]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase">
                <span className="w-16">Speed</span>
                <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-[#ffff00]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a0040]/80 border-2 border-[#ff00ff] p-3 rounded text-sm italic text-center prose prose-invert prose-p:m-0 max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
      </div>

      {/* Grid Roster (Fake) */}
      <div className="mt-auto grid grid-cols-6 gap-2 w-full px-12 opacity-50">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-black border border-white/30 flex items-center justify-center"
          >
            <Lock size={16} className="text-white/30" />
          </div>
        ))}
      </div>
    </div>
  );
};
