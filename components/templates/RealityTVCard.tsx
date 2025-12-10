import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const RealityTVCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-black relative flex items-center justify-center overflow-hidden"
    >
      {/* Background: Interview Room */}
      <div className="absolute inset-0 z-0">
        <img src={data.user.avatarUrl} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Blur Background for Depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Lower Third Graphic */}
      <div className="absolute bottom-8 left-8 z-20">
        {/* Name Bar */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 pl-4 pr-12 py-2 transform -skew-x-[20deg] shadow-lg border-l-4 border-white">
          <h1 className="text-3xl font-black text-white uppercase tracking-wider transform skew-x-[20deg] drop-shadow-md">
            {data.user.name}
          </h1>
        </div>

        {/* Title Bar */}
        <div className="bg-white/90 pl-4 pr-8 py-1 mt-1 transform -skew-x-[20deg] inline-block shadow-md">
          <div className="text-sm font-bold text-purple-900 uppercase tracking-widest transform skew-x-[20deg]">
            Full-Time Hater
          </div>
        </div>
      </div>

      {/* Quote Overlay */}
      <div className="absolute top-1/2 right-8 max-w-[40%] text-right z-20">
        <div
          className="font-serif italic text-2xl text-white font-medium leading-relaxed drop-shadow-xl prose prose-invert prose-p:my-0 max-w-none break-words w-full"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          <span className="text-6xl absolute -top-8 -left-4 opacity-50 font-black">
            “
          </span>
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          <span className="text-6xl absolute -bottom-12 -right-4 opacity-50 font-black">
            ”
          </span>
        </div>
      </div>

      {/* Season Logo */}
      <div className="absolute top-8 left-8 w-16 h-16 border-4 border-white rounded-full flex items-center justify-center opacity-70">
        <div className="font-black text-white text-xs text-center leading-none">
          REAL
          <br />
          LIFE
        </div>
      </div>
    </div>
  );
};
