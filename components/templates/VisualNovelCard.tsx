import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Play, SkipForward, Save, Settings } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const VisualNovelCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-black text-white font-sans relative overflow-hidden flex flex-col justify-end"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1560972550-a958c96350bd?q=80&w=1956&auto=format&fit=crop")`, // School hallway or generic anime background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Dim */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Character Sprite Placeholder */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto z-10 flex items-end">
        <img
          src={
            data.user.avatarUrl ||
            "https://api.dicebear.com/7.x/avataaars/svg?seed=Anime&clothing=blazerAndShirt"
          }
          alt="Character"
          className="h-full w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        />
      </div>

      {/* UI Layer */}
      <div className="relative z-20 p-6 pb-8">
        {/* Dialogue Box */}
        <div className="bg-[#2a2a2a]/95 border-2 border-white/50 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.8)] p-6 min-h-[160px] flex flex-col">
          {/* Name Tag */}
          <div className="absolute -top-5 left-10 bg-[#ff6ec7] text-white px-8 py-2 text-xl font-bold skew-x-[-15deg] border-2 border-white shadow-lg">
            <span className="block skew-x-[15deg]">{data.user.name}</span>
          </div>

          {/* Text */}
          <div className="mt-4 text-xl leading-relaxed font-medium text-white/95 drop-shadow-sm prose prose-invert max-w-none break-words w-full h-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            <span className="inline-block w-3 h-5 bg-white ml-1 align-middle"></span>
          </div>

          {/* Controls */}
          <div className="mt-auto flex justify-end gap-4 text-white/50">
            <div className="flex items-center gap-1 hover:text-white cursor-pointer">
              <Save size={16} /> Save
            </div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer">
              <Play size={16} /> Auto
            </div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer">
              <SkipForward size={16} /> Skip
            </div>
            <div className="flex items-center gap-1 hover:text-white cursor-pointer">
              <Settings size={16} /> Config
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
