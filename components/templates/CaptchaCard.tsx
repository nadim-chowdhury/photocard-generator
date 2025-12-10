import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { RefreshCcw, Info, Headphones } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const CaptchaCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[450px] min-h-[550px] bg-white p-4 font-sans border border-zinc-200 shadow-xl flex flex-col"
    >
      {/* Blue Header */}
      <div className="bg-[#4a90e2] text-white p-6 flex flex-col justify-between mb-2">
        <div>
          <h2 className="text-lg font-normal mb-1">Select all images with</h2>
          <h1 className="text-3xl font-bold uppercase leading-none mb-2">
            Common Sense
          </h1>
        </div>
        <div className="text-sm font-normal">
          Click verify once there are none left.
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 mb-2 bg-white border border-zinc-200 p-1">
        {/* Center is the user content / "The Mistake" */}
        <div className="col-span-3 row-span-2 bg-[#f9f9f9] flex items-center justify-center p-4 text-center border overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-10 bg-repeat bg-[length:20px_20px]"
            style={{
              backgroundImage: "radial-gradient(#000 10%, transparent 10%)",
            }}
          ></div>
          <div className="prose prose-sm max-w-none break-words w-full z-10 font-medium text-zinc-800">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>

        {/* Fake Captcha Images */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-zinc-100 flex items-center justify-center overflow-hidden relative"
          >
            <img
              src={`https://picsum.photos/seed/${i + 123}/150`}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center mt-auto pt-2 border-t border-zinc-100">
        <div className="flex gap-4 text-zinc-500">
          <RefreshCcw size={24} />
          <Headphones size={24} />
          <Info size={24} />
        </div>
        <button className="bg-[#4a90e2] text-white px-8 py-2 font-bold uppercase text-sm rounded hover:bg-blue-600 transition-colors">
          Verify
        </button>
      </div>
    </div>
  );
};
