import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const TabloidCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[600px] bg-yellow-300 p-2 font-sans relative overflow-hidden"
    >
      <div className="w-full h-full bg-white border-2 border-black relative">
        {/* Header */}
        <div className="bg-red-600 text-white text-center py-2 border-b-4 border-black">
          <h1
            className="text-5xl font-black italic tracking-tighter transform -skew-x-12 uppercase"
            style={{ textShadow: "4px 4px 0 #000" }}
          >
            WEEKLY TEA
          </h1>
        </div>

        {/* Main Photo Area */}
        <div className="relative h-[300px] w-full bg-zinc-200 overflow-hidden border-b-4 border-black">
          <img
            src={data.user.avatarUrl}
            className="w-full h-full object-cover contrast-110 saturate-150"
          />

          {/* Sticker 1 */}
          <div className="absolute top-4 right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-center p-2 border-2 border-black shadow-[4px_4px_0_#000] rotate-12 z-20">
            <span className="font-black text-sm uppercase leading-tight text-red-600">
              CAUGHT IN 4K!
            </span>
          </div>

          {/* Sticker 2 */}
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 border-2 border-black shadow-[4px_4px_0_#000] -rotate-3 z-20">
            <span className="font-black text-xs uppercase text-black">
              EXCLUSIVE PHOTOS
            </span>
          </div>
        </div>

        {/* Headline & Body */}
        <div className="p-4 bg-yellow-100 h-full flex flex-col">
          <h2 className="text-4xl font-black uppercase leading-[0.9] text-black mb-4 drop-shadow-sm">
            {data.user.handle.toUpperCase()}'S LATEST SCANDAL REVEALED
          </h2>

          <div className="flex-1 bg-white border-2 border-black p-4 shadow-[4px_4px_0_#000] relative">
            <div className="absolute -top-3 left-4 bg-red-600 text-white px-2 text-xs font-bold uppercase transform -rotate-1">
              READ THE RECEIPT
            </div>
            <div className="text-lg font-bold leading-tight prose prose-p:my-0 max-w-none break-words w-full font-serif italic text-black">
              <Markdown
                remarkPlugins={[remarkBreaks]}
              >{`"${data.content}"`}</Markdown>
            </div>
          </div>
        </div>

        {/* Barcode */}
        <div className="absolute bottom-2 right-2 flex flex-col items-center opacity-80">
          <div className="h-8 w-24 bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px)]"></div>
          <div className="text-[8px] font-mono">1337-CODE</div>
        </div>
      </div>
    </div>
  );
};
