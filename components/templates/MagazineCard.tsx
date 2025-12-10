import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const MagazineCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[650px] bg-white relative overflow-hidden flex flex-col"
    >
      {/* Background Image (Cover Model) */}
      <div className="absolute inset-0 z-0">
        <img src={data.user.avatarUrl} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>

      {/* Red Border Frame */}
      <div className="absolute inset-0 border-[16px] border-red-600 z-10 pointer-events-none"></div>

      {/* Masthead */}
      <div className="relative z-20 w-full text-center mt-4">
        <h1
          className="text-[140px] font-serif font-bold text-white leading-none tracking-tighter scale-y-90 shadow-lg drop-shadow-2xl opacity-95"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          TIME
        </h1>
        <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-[0.3em] py-0.5 w-max mx-auto px-2 -mt-4 relative">
          Person of the Year
        </div>
      </div>

      {/* Headlines */}
      <div className="relative z-20 mt-auto p-8 pb-12 w-full text-white">
        <h2 className="text-5xl font-serif font-bold italic leading-none mb-4 drop-shadow-lg">
          {data.user.name}
        </h2>

        <div className="w-16 h-1 bg-red-600 mb-6 font-bold"></div>

        <div className="text-xl font-medium leading-snug drop-shadow-md prose prose-invert prose-p:my-0 max-w-none break-words w-full font-serif border-l-4 border-white pl-4">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="mt-8 flex justify-between items-end text-[10px] font-bold uppercase tracking-widest opacity-80">
          <div>
            The Special Edition
            <br />
            Double Issue
          </div>
          <div>
            Display Until
            <br />
            Forever
          </div>
        </div>
      </div>

      {/* Barcode Overlay */}
      <div className="absolute bottom-6 right-6 z-20 bg-white p-1">
        <div className="w-16 h-10 bg-[repeating-linear-gradient(90deg,black,black_1px,transparent_1px,transparent_3px)]"></div>
      </div>
    </div>
  );
};
