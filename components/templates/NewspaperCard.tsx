import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Globe, FileText, Calendar } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const NewspaperCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      id={id}
      className="w-[600px] min-h-[600px] bg-[#fdfbf7] text-[#1a1a1a] p-8 font-serif relative overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")`,
      }}
    >
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] pointer-events-none"></div>

      {/* Header */}
      <header className="w-full text-center border-b-[3px] border-black pb-4 mb-6 relative">
        <div className="text-xs font-bold uppercase tracking-[0.3em] mb-2 flex justify-between items-center px-2">
          <span>Vol. 01</span>
          <span className="flex items-center gap-1">
            <Globe size={12} /> WORLDWIDE
          </span>
          <span>$0.50</span>
        </div>
        <h1 className="text-6xl font-black uppercase tracking-tight scale-y-110 mb-2 font-serif">
          THE DAILY MEME
        </h1>
        <div className="border-t border-b border-black py-1 flex justify-between px-4 text-xs font-bold uppercase tracking-wider">
          <span>{currentDate}</span>
          <span>Late Edition</span>
          <span>{data.user.handle}</span>
        </div>
      </header>

      {/* Main Story */}
      <div className="flex-1 w-full flex flex-col items-start px-2">
        <h2 className="text-4xl font-black leading-tight mb-4 w-full text-left">
          EXCLUSIVE: {data.user.name.toUpperCase()} SPEAKS OUT
        </h2>

        <div className="w-full flex gap-6 mb-6">
          <div className="w-1/3 shrink-0 flex flex-col gap-2">
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/micah/svg?seed=News"
              }
              alt={data.user.name}
              className="w-full aspect-[4/5] object-cover grayscale contrast-125 border border-black"
            />
            <p className="text-[10px] leading-tight opacity-70 italic border-l-2 border-black pl-2">
              Fig 1. The subject captured in a moment of intense posting.
            </p>
          </div>

          <div className="flex-1 text-lg leading-snug text-justify font-serif prose prose-stone max-w-none break-words">
            <p className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:mt-[-10px]">
              <span className="font-bold uppercase tracking-widest text-xs block mb-1 border-b border-black w-14 pb-0.5">
                REPORT
              </span>
            </p>
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
      </div>

      {/* Footer / Lower Third */}
      <div className="w-full border-t-[3px] border-black pt-4 mt-auto flex justify-between items-end">
        <div className="flex flex-col gap-1 text-xs font-bold uppercase">
          {data.socials.slice(0, 3).map((s, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span>■</span> {s.username} ({s.platform})
            </div>
          ))}
        </div>
        <div className="text-5xl font-black opacity-10">PAGE 01</div>
      </div>
    </div>
  );
};
