import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { AlertTriangle } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const AlertCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[400px] min-h-[600px] bg-black/60 relative font-sans flex flex-col items-center justify-center p-8 backdrop-blur-sm"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1516245834210-c4c14278733f?q=80&w=2069&auto=format&fit=crop")`, // Modern city blurred
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Alert Box */}
      <div className="relative z-10 w-full bg-[#1c1c1e]/95 backdrop-blur rounded-[20px] shadow-2xl overflow-hidden border border-zinc-700">
        {/* Header */}
        <div className="bg-transparent p-4 border-b border-zinc-700 flex flex-col items-center gap-2">
          <div className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
            Emergency Alert System
          </div>
          <h1 className="text-white text-lg font-bold">Presidential Alert</h1>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <div className="text-white text-lg leading-relaxed font-normal prose prose-invert max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>

          <div className="mt-6 text-zinc-500 text-xs font-medium">
            Issued by:{" "}
            <span className="text-zinc-300 font-bold">@{data.user.handle}</span>
          </div>
        </div>

        {/* Footer / Buttons */}
        <div className="border-t border-zinc-700 grid grid-cols-1">
          <div className="p-4 text-center text-blue-500 font-bold text-lg cursor-pointer hover:bg-zinc-800 transition-colors">
            OK
          </div>
        </div>
      </div>
    </div>
  );
};
