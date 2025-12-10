import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const MugshotCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-zinc-300 relative flex flex-col items-center justify-end overflow-hidden"
    >
      {/* Height Chart Background */}
      <div className="absolute inset-0 z-0 flex flex-col justify-evenly items-center pointer-events-none opacity-50">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-full border-t border-zinc-500 h-12 relative"
          >
            <span className="absolute left-4 -top-3 text-xl font-bold text-zinc-600">
              {6 - i * 0.5}'0"
            </span>
            <span className="absolute right-4 -top-3 text-xl font-bold text-zinc-600">
              {6 - i * 0.5}'0"
            </span>
          </div>
        ))}
      </div>

      {/* Subject */}
      <div className="relative z-10 w-[80%] aspect-[3/4] mb-4 shadow-xl">
        <img
          src={data.user.avatarUrl}
          className="w-full h-full object-cover grayscale contrast-125 brightness-90"
        />
      </div>

      {/* The Slate */}
      <div className="relative z-20 bg-black text-white p-6 w-[90%] mb-12 rounded-sm shadow-2xl flex flex-col items-center text-center">
        <div className="w-full border-b-2 border-white mb-2 pb-1 flex justify-between items-center text-xs font-bold uppercase tracking-widest">
          <span>Police Dept.</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>

        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 font-mono">
          BAD TAKES
        </h1>

        <div className="text-lg font-bold leading-tight font-mono mb-4 prose prose-invert prose-p:my-0 max-w-none break-words w-full">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="w-full pt-1 flex justify-between items-end text-xs font-mono opacity-80">
          <div>ID: 80085</div>
          <div>CASE: #L-RATIO</div>
        </div>
      </div>

      {/* Overlay Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.4)_100%)] z-30 pointer-events-none"></div>
    </div>
  );
};
