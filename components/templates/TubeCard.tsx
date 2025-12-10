import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Play } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const TubeCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-white font-sans flex flex-col"
    >
      {/* Thumbnail Image Area */}
      <div className="relative w-full h-[340px] bg-black overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1542204637-e67bc7d41e48?q=80&w=2175&auto=format&fit=crop")`,
          }}
        ></div>

        {/* Face cut-out (User Avatar) */}
        <div className="absolute bottom-0 right-0 w-[240px] h-[240px] z-10 transition-transform transform hover:scale-105 origin-bottom-right">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Shocked"
            }
            alt={data.user.name}
            className="w-full h-full object-cover drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            style={{
              maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
            }}
          />
        </div>

        {/* Red Arrow & Circles */}
        <svg
          className="absolute top-1/2 left-1/4 w-32 h-32 text-red-600 drop-shadow-lg z-20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13l-5-5-5 5" strokeWidth="4" />
          <path d="M13 8V21" strokeWidth="4" />
        </svg>
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border-[6px] border-red-600 rounded-full drop-shadow-lg z-10"></div>

        {/* Clickbait Text Overlay */}
        <div className="absolute top-8 left-8 max-w-[60%] z-20">
          <h1
            className="text-5xl font-black text-white uppercase italic leading-none drop-shadow-[0_4px_0_rgba(0,0,0,1)] stroke-black"
            style={{
              textShadow:
                "4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
            }}
          >
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </h1>
          <div className="mt-2 bg-red-600 text-white text-2xl font-black inline-block px-4 py-1 uppercase transform -rotate-2 border-2 border-white shadow-lg">
            Gone Wrong!
          </div>
        </div>

        {/* Time Stamp */}
        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 text-sm font-bold rounded z-20">
          10:01
        </div>
      </div>

      {/* Video Info Below */}
      <div className="flex-1 p-4 bg-white flex gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-200 shrink-0">
          <img
            src={data.user.avatarUrl}
            alt={data.user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-zinc-900 text-lg leading-tight line-clamp-2">
            I tried to have a logical argument and THIS happened (INSTANT
            REGRET) 😱
          </h2>
          <div className="text-zinc-500 text-sm mt-1 flex items-center gap-1">
            {data.user.name} • 1M views • 1 hour ago
          </div>
        </div>
      </div>
    </div>
  );
};
