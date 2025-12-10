import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Quote } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const QuoteCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[600px] bg-black text-white p-12 font-serif flex flex-col justify-center items-center text-center relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, #2a2a2a 0%, #000 100%)",
      }}
    >
      <Quote size={64} className="text-white/20 mb-8 absolute top-8 left-8" />

      <div className="relative z-10 w-full max-w-[80%]">
        <div className="text-3xl md:text-5xl font-bold leading-tight italic tracking-wide prose prose-invert max-w-none break-words w-full">
          <Markdown
            remarkPlugins={[remarkBreaks]}
          >{`"${data.content}"`}</Markdown>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <div className="w-16 h-1 bg-white/50"></div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden grayscale">
            <img
              src={data.user.avatarUrl}
              alt={data.user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-bold text-lg uppercase tracking-widest">
              {data.user.name}
            </div>
            <div className="text-sm text-zinc-400 italic font-sans">
              Visionary / Thought Leader
            </div>
          </div>
        </div>
      </div>

      <Quote
        size={64}
        className="text-white/20 mb-8 absolute bottom-8 right-8 rotate-180"
      />
    </div>
  );
};
