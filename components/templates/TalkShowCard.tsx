import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const TalkShowCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-blue-900 relative flex items-end justify-center overflow-hidden"
    >
      {/* Background: Curtains/City */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/blue-curtain.png')] bg-cover opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900/50 to-transparent"></div>

      {/* City Skyline Silhouette */}
      <div className="absolute bottom-[100px] left-0 right-0 h-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/New_York_City_Skyline_Silva.jpg/1280px-New_York_City_Skyline_Silva.jpg')] bg-cover grayscale contrast-200 opacity-20 mix-blend-overlay"></div>

      {/* Desk and Guest */}
      <div className="relative z-10 flex items-end justify-center w-full px-8 pb-0">
        {/* Guest */}
        <div className="relative transform translate-y-4">
          <div className="w-48 h-48 rounded-full border-4 border-white shadow-[0_0_50px_rgba(255,255,255,0.3)] overflow-hidden bg-zinc-800">
            <img
              src={data.user.avatarUrl}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desk Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#3d2616] border-t-8 border-[#5c3a21] shadow-2xl skew-x-12 transform origin-bottom-left w-[110%] -ml-4"></div>
      </div>

      {/* Graphic Overlay */}
      <div className="absolute top-8 left-0 w-full text-center z-30">
        <div className="bg-yellow-500 text-black font-black uppercase tracking-tighter px-6 py-2 text-4xl inline-block transform -rotate-2 shadow-[4px_4px_0_rgba(0,0,0,0.5)] border-2 border-white">
          TONIGHT'S GUEST
        </div>
      </div>

      <div className="absolute bottom-4 left-0 w-full text-center z-30">
        <div className="bg-blue-600/90 backdrop-blur text-white px-8 py-4 mx-8 rounded-xl border border-blue-400/30 shadow-2xl">
          <h2 className="text-2xl font-bold uppercase mb-1 text-yellow-400 drop-shadow-sm">
            {data.user.name}
          </h2>
          <div className="text-lg font-medium leading-tight prose prose-invert prose-p:my-0 max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
      </div>

      {/* Applause Sign */}
      <div className="absolute top-8 right-8 bg-red-600 border-4 border-black px-4 py-2 rounded shadow-[0_0_20px_#f00] z-20 animate-pulse">
        <span className="text-white font-black uppercase text-xl font-sans tracking-widest drop-shadow-[0_0_5px_#fff]">
          LAUGH
        </span>
      </div>
    </div>
  );
};
