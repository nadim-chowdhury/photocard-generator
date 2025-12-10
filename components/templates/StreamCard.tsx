import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Play, Info, ThumbsUp, Plus } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const StreamCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#141414] text-white font-sans relative overflow-hidden flex flex-col justify-end p-8"
      style={{
        backgroundImage: `linear-gradient(to top, #141414 10%, transparent 60%), url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Main Content Info */}
      <div className="relative z-10 w-3/4">
        <div className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
          <span className="w-6 h-6 bg-red-600 text-white rounded-sm flex items-center justify-center font-black text-xs">
            N
          </span>{" "}
          SERIES
        </div>

        <h1 className="text-5xl font-black uppercase text-white mb-4 drop-shadow-lg leading-tight">
          {data.user.handle}'s
          <br />
          Downfall
        </h1>

        <div className="flex items-center gap-4 text-sm font-bold text-zinc-300 mb-4">
          <span className="text-green-500">98% Match</span>
          <span>2024</span>
          <span className="border border-zinc-500 px-1 text-xs">TV-MA</span>
          <span>1 Season</span>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-transparent w-full h-1 mb-4"></div>

        <div className="text-lg text-white drop-shadow-md mb-6 font-medium leading-snug prose prose-invert max-w-none break-words w-full">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-bold flex items-center gap-2 hover:bg-zinc-200">
            <Play size={24} fill="currentColor" /> Play
          </button>
          <button className="bg-zinc-600/60 text-white px-6 py-2 rounded font-bold flex items-center gap-2 hover:bg-zinc-600/40">
            <Info size={24} /> More Info
          </button>
        </div>

        <div className="mt-8">
          <div className="font-bold text-lg mb-2">Episodes</div>
          <div className="flex gap-4 overflow-hidden opacity-70">
            <div className="w-48 aspect-video bg-zinc-800 rounded relative shrink-0 border-2 border-white">
              <img
                src={data.user.avatarUrl}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute bottom-2 left-2 text-xs font-bold">
                E1: The Beginning
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play size={32} />
              </div>
            </div>
            <div className="w-48 aspect-video bg-zinc-900 rounded shrink-0 flex items-center justify-center text-zinc-600 font-bold">
              E2
            </div>
            <div className="w-48 aspect-video bg-zinc-900 rounded shrink-0 flex items-center justify-center text-zinc-600 font-bold">
              E3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
