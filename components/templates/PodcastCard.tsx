import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Mic, Play, MoreHorizontal } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const PodcastCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  /* Generate a random gradient based on username length for variety */
  const colors = [
    "from-purple-600 to-blue-600",
    "from-pink-500 to-orange-500",
    "from-green-400 to-cyan-600",
    "from-red-600 to-pink-600",
  ];
  const gradient = colors[data.user.handle.length % colors.length];

  return (
    <div
      id={id}
      className={`w-[500px] min-h-[500px] bg-gradient-to-br ${gradient} p-8 flex flex-col justify-end text-white shadow-2xl relative overflow-hidden`}
    >
      {/* Big Mic Background */}
      <div className="absolute -top-12 -right-12 text-white/10 transform rotate-12">
        <Mic size={300} fill="currentColor" />
      </div>

      {/* Album Art Look */}
      <div className="mb-8 w-48 h-48 bg-black shadow-2xl relative overflow-hidden rounded-md border border-white/10">
        <img
          src={data.user.avatarUrl}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Clean Logo Overlay */}
        </div>
        <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase border border-white/20">
          Explicit Content
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 border border-white/30 inline-block px-2 py-0.5 rounded-full">
          Episode #1
        </div>

        <h1 className="text-4xl font-black leading-none mb-4 font-sans tracking-tight drop-shadow-md">
          The Hater's Ball
        </h1>

        <div className="text-lg font-medium leading-snug prose prose-invert prose-p:my-0 max-w-none break-words w-full h-[150px] overflow-hidden mask-image-gradient-b">
          <span className="opacity-60 block text-xs uppercase mb-1">
            Description
          </span>
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        {/* Player Controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center pl-1 shadow-lg cursor-pointer">
              <Play fill="currentColor" size={24} />
            </div>
            <div className="text-xs font-mono opacity-80">00:00 / 99:99</div>
          </div>
          <div className="text-white/80">
            <MoreHorizontal size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
