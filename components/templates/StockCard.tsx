import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { TrendingDown, ArrowDown } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const StockCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#1e222d] text-white p-6 font-sans relative flex flex-col"
    >
      {/* Ticker Header */}
      <div className="flex justify-between items-center border-b border-[#2a2e39] pb-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500">
            <TrendingDown size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">$CLWN</h1>
            <div className="text-sm text-zinc-400">Clown Global Industries</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-red-500 flex items-center justify-end gap-1">
            <ArrowDown size={28} /> $0.00
          </div>
          <div className="text-sm font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded inline-block">
            -99.99% (All Time)
          </div>
        </div>
      </div>

      {/* Main Content Area (The "News" affecting the stock) */}
      <div className="flex-1 flex gap-6">
        {/* Graph Area */}
        <div className="flex-1 bg-[#131722] rounded-lg p-4 relative overflow-hidden border border-[#2a2e39]">
          {/* Grid Lines */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="h-1/4 w-full border-b border-zinc-500"></div>
            <div className="h-1/4 w-full border-b border-zinc-500 top-1/4 relative"></div>
            <div className="h-1/4 w-full border-b border-zinc-500 top-1/2 relative"></div>
          </div>

          {/* The Line (Crash) */}
          <svg
            className="absolute inset-0 w-full h-full z-10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q100,50 150,150 T300,300 T600,380"
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
            />
            <path
              d="M0,50 Q100,50 150,150 T300,300 T600,380 L600,400 L0,400 Z"
              fill="url(#grad)"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={1} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeframe */}
          <div className="absolute bottom-2 right-4 text-xs font-bold text-zinc-500 z-20">
            1D 5D 1M 6M YTD 1Y 5Y ALL
          </div>
        </div>

        {/* News Sidebar */}
        <div className="w-[200px] flex flex-col gap-2">
          <div className="text-xs font-bold uppercase text-zinc-500 mb-1">
            Latest News
          </div>

          <div className="bg-[#2a2e39] p-3 rounded border-l-4 border-red-500">
            <div className="text-[10px] text-zinc-400 mb-1">
              {new Date().toLocaleTimeString()}
            </div>
            <div className="text-sm font-bold leading-snug mb-2">
              Market crashes after viral post by {data.user.handle}
            </div>
            <div className="text-xs text-zinc-300 opacity-80 line-clamp-4 leading-tight prose prose-invert prose-p:my-0 max-w-none break-words w-full">
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>
          </div>

          <div className="mt-auto bg-blue-600/20 text-blue-400 p-2 text-center text-xs font-bold rounded border border-blue-600/50">
            Analyst Rating: SELL
          </div>
        </div>
      </div>
    </div>
  );
};
