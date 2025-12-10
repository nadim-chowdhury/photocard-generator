import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Disc, Battery, Aperture } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const PaparazziCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-black relative flex items-center justify-center overflow-hidden"
    >
      {/* Blurred "Spy" Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.user.avatarUrl}
          className="w-full h-full object-cover opacity-80"
        />
        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))] bg-[length:100%_4px,3px_100%] z-10"></div>
        {/* Green Night Vision Tint (Optional, going with clear/digital look instead) */}
      </div>

      {/* Viewfinder Overlay */}
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between pointer-events-none">
        {/* Top Info */}
        <div className="flex justify-between items-start text-red-600 font-mono text-xl font-bold drop-shadow-md">
          <div className="flex items-center gap-2 animate-pulse">
            <Disc fill="currentColor" size={24} /> REC
          </div>
          <div className="text-white flex items-center gap-2 text-sm">
            <Battery size={24} fill="currentColor" className="text-green-500" />{" "}
            100%
          </div>
        </div>

        {/* Crosshair Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/50 flex items-center justify-center">
          <div className="w-1 h-2 bg-white/50"></div>
          <div className="h-1 w-2 bg-white/50 absolute"></div>
        </div>

        {/* Focus Brackets */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px]">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/80"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/80"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/80"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/80"></div>
        </div>

        {/* Bottom Info */}
        <div className="flex justify-between items-end text-white font-mono text-sm font-bold opacity-80 drop-shadow-md">
          <div>
            ISO 800
            <br />
            1/250
            <br />
            F2.8
          </div>
          <div className="text-right">
            {new Date().toLocaleTimeString()}
            <br />
            [Raw]
          </div>
        </div>
      </div>

      {/* Breaking Text Overlay */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[90%] bg-red-600/90 text-white p-4 transform skew-x-[-10deg] shadow-lg border-2 border-white z-30">
        <div className="transform skew-x-[10deg] text-center">
          <div className="text-xs font-black uppercase tracking-widest bg-black inline-block px-2 text-yellow-400 mb-1">
            Exposed
          </div>
          <div className="text-2xl font-black uppercase leading-none prose prose-invert prose-p:my-0 max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};
