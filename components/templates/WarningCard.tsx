import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Triangle, Skull } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const WarningCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#f2c94c] text-black p-8 font-sans border-8 border-black flex flex-col relative"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, #f2c94c, #f2c94c 20px, #dbb43f 20px, #dbb43f 40px)`,
      }}
    >
      <div className="bg-black text-[#f2c94c] p-6 text-center border-b-8 border-black flex items-center justify-center gap-6">
        <Triangle className="w-16 h-16 fill-[#f2c94c] text-black stroke-[3px]" />
        <h1 className="text-6xl font-black uppercase tracking-tighter">
          DANGER
        </h1>
        <Triangle className="w-16 h-16 fill-[#f2c94c] text-black stroke-[3px]" />
      </div>

      <div className="bg-white border-8 border-black p-8 flex-1 flex flex-col items-center text-center mt-[-4px]">
        <h2 className="text-4xl font-black mb-4 uppercase">TOXIC HAZARD</h2>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24 border-4 border-black bg-black flex items-center justify-center">
            <Skull className="w-16 h-16 text-white" />
          </div>
          <div className="text-left">
            <div className="font-bold uppercase text-xl">Exposure Risk:</div>
            <div className="font-medium text-lg">
              High levels of {data.user.handle} detected.
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-black mb-6"></div>

        <div className="text-2xl font-bold leading-tight uppercase prose prose-stone max-w-none break-words w-full">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="mt-auto pt-8 w-full">
          <div className="bg-black text-white py-2 px-4 font-bold text-sm uppercase flex justify-between">
            <span>Safety Protocol: EVACUATE</span>
            <span>ISO 9001: CLOWN</span>
          </div>
        </div>
      </div>
    </div>
  );
};
