import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ScoreboardCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-zinc-900 relative flex items-center justify-center overflow-hidden font-sans text-white border-b-[8px] border-yellow-500"
    >
      {/* Stadium Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Wembley_Stadium_Interior.jpg/1280px-Wembley_Stadium_Interior.jpg')] bg-cover opacity-30 contrast-125 blur-sm"></div>

      {/* Main Scoreboard Graphic */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Top Bar */}
        <div className="bg-black/80 backdrop-blur w-full py-2 flex justify-between px-8 border-b-2 border-zinc-700">
          <div className="flex gap-2 items-center text-xs font-bold uppercase tracking-widest text-zinc-400">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>{" "}
            Live
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Final
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            CLWN League
          </div>
        </div>

        {/* Teams & Scores */}
        <div className="flex items-center justify-between w-full px-16 py-8">
          {/* Home Team (User) */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full border-4 border-zinc-500 overflow-hidden bg-zinc-800 grayscale">
              <img
                src={data.user.avatarUrl}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <div className="text-2xl font-black uppercase tracking-wider">
                {data.user.handle}
              </div>
              <div className="text-sm font-bold text-zinc-500 uppercase">
                Home
              </div>
            </div>
          </div>

          {/* Score */}
          <div className="flex items-center gap-8">
            <div className="text-8xl font-black font-mono tracking-tighter text-zinc-500">
              0
            </div>
            <div className="text-2xl font-black opacity-50">-</div>
            <div className="text-8xl font-black font-mono tracking-tighter text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">
              100
            </div>
          </div>

          {/* Away Team (The Internet) */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full border-4 border-yellow-500 overflow-hidden bg-yellow-500 flex items-center justify-center">
              <span className="text-4xl">🌐</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black uppercase tracking-wider">
                World
              </div>
              <div className="text-sm font-bold text-yellow-500 uppercase">
                Away
              </div>
            </div>
          </div>
        </div>

        {/* Lower Third Stats */}
        <div className="w-[80%] bg-blue-900/90 border-l-8 border-yellow-500 p-4 transform -skew-x-12 shadow-lg mt-4">
          <div className="transform skew-x-12">
            <div className="text-xs font-bold uppercase text-blue-300 mb-1">
              Key Moment
            </div>
            <div className="text-lg font-bold leading-tight prose prose-invert prose-p:my-0 max-w-none break-words w-full">
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
