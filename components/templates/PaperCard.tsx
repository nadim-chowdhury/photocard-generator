import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const PaperCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-[#fdfbf7] p-8 font-serif text-black relative shadow-2xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cardboard-flat.png')",
      }}
    >
      {/* Tape Effect */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-12 bg-yellow-200/50 backdrop-blur-sm -rotate-2 shadow-sm border border-white/40"></div>

      {/* Paper Content */}
      <div className="h-full w-full border-2 border-zinc-200 p-8 flex flex-col items-center justify-center relative">
        <div className="absolute top-4 right-4 opacity-50 font-sans text-xs font-bold tracking-widest text-zinc-400 rotate-90 origin-top-right">
          ARCHIVE // {data.user.handle.toUpperCase()}
        </div>

        <div
          className="text-3xl md:text-4xl text-zinc-900 leading-relaxed font-medium font-mono text-center opacity-90 prose prose-lg prose-p:my-0 max-w-none break-words w-full"
          style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.1)" }}
        >
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="mt-12 w-16 h-1 bg-black/80"></div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="w-20 h-20 bg-zinc-100 p-1 border border-zinc-300 shadow-inner flex items-center justify-center grayscale contrast-125">
            <img
              src={data.user.avatarUrl}
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Coffee Stain */}
        <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 rounded-full border-[20px] border-[#6b4c35] opacity-10 mix-blend-multiply blur-sm"></div>
      </div>
    </div>
  );
};
