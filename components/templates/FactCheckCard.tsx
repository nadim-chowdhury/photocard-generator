import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { AlertCircle, ArrowRight } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const FactCheckCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[300px] bg-white p-0 relative overflow-hidden font-sans border border-zinc-200"
    >
      {/* Header / Context */}
      <div className="p-4 border-b border-zinc-100 flex gap-3">
        <img
          src={
            data.user.avatarUrl ||
            "https://api.dicebear.com/7.x/identicon/svg?seed=Fact"
          }
          alt={data.user.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="font-bold text-black flex items-center gap-1">
            {data.user.name}{" "}
            <span className="text-zinc-500 font-normal">
              @{data.user.handle}
            </span>
          </div>
          <div className="text-zinc-600 leading-snug text-lg">
            Just posted some absolute nonsense on the timeline.
          </div>
        </div>
      </div>

      {/* Main "False" Overlay */}
      <div className="bg-orange-50/50 p-4 border-b border-orange-100/50 relative">
        <div className="absolute inset-0 bg-white/60 blur-[2px] z-10"></div>
        <div className="relative z-20 opacity-30 blur-[1px] font-serif text-xl p-4">
          "I actually know what I'm talking about..."
        </div>

        {/* The Fact Check Box */}
        <div className="relative z-30 -mt-8 mx-auto w-[90%]">
          <div className="bg-white rounded-xl shadow-lg border border-zinc-200 overflow-hidden">
            <div className="bg-orange-500 text-white px-4 py-2 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
              <AlertCircle size={16} /> Readers added context
            </div>
            <div className="p-6">
              <div className="font-bold text-zinc-900 mb-2 text-lg">
                Readers thought users might like to know this is false.
              </div>
              <div className="text-zinc-800 text-xl leading-relaxed prose prose-zinc max-w-none break-words w-full">
                <Markdown remarkPlugins={[remarkBreaks]}>
                  {data.content}
                </Markdown>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100 text-blue-500 text-sm font-medium flex items-center gap-1">
                Do you find this helpful? <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-zinc-50 text-center text-zinc-400 text-xs font-bold uppercase tracking-widest">
        Official Community Note
      </div>
    </div>
  );
};
