import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const CinemaCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-black flex items-center justify-center p-8 relative overflow-hidden"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1517604931442-710c8ef5ad25?q=80&w=2069&auto=format&fit=crop")`, // Dark cinema background
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Lightbox Container */}
      <div className="relative z-10 bg-[#f4ebd0] p-6 border-[8px] border-zinc-900 rounded-lg shadow-[0_0_50px_rgba(255,255,200,0.2)]">
        {/* Inner Glow */}
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] pointer-events-none"></div>

        {/* Letter Tracks */}
        <div className="space-y-4">
          {/* Line 1 (Track) */}
          <div className="border-b-2 border-zinc-300 pb-2"></div>

          {/* Content */}
          <div
            className="font-bold text-4xl md:text-5xl uppercase text-black text-center tracking-widest leading-normal font-sans prose prose-p:my-0 max-w-none break-words w-full"
            style={{ fontFamily: '"Oswald", sans-serif' }}
          >
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>

          {/* Line 2 (Track) */}
          <div className="border-t-2 border-zinc-300 pt-2"></div>
        </div>
      </div>

      {/* Footer / Credits */}
      <div className="absolute bottom-4 right-6 text-white text-xs font-bold tracking-widest uppercase opacity-80">
        Now Showing: @{data.user.handle}
      </div>
    </div>
  );
};
