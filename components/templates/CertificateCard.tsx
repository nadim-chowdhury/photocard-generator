import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Award } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const CertificateCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[450px] bg-[#fdfbf7] p-8 border-[20px] border-[#2c3e50] relative flex items-center justify-center font-serif text-[#2c3e50]"
      style={{
        borderStyle: "double",
        outline: "4px solid #c0392b",
        outlineOffset: "-10px",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")`,
      }}
    >
      <div className="text-center w-full h-full border-4 border-[#c0392b] p-8 relative">
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#c0392b]"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#c0392b]"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#c0392b]"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#c0392b]"></div>

        <div className="mb-4 text-center flex justify-center text-[#c0392b] opacity-80">
          <Award size={64} />
        </div>

        <h1
          className="text-5xl font-bold uppercase tracking-wider mb-2"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Certificate
        </h1>
        <div className="text-xl italic font-medium mb-6 animate-pulse">
          of Participation
        </div>

        <div className="text-sm uppercase tracking-widest mb-2 font-bold">
          This acknowledges that
        </div>

        <div className="text-4xl font-bold text-[#c0392b] border-b-2 border-[#2c3e50] inline-block px-12 pb-2 mb-6 font-cursive">
          {data.user.name}
        </div>

        <div className="text-sm uppercase tracking-widest mb-4 font-bold">
          Has successfully posted the following:
        </div>

        <div className="text-lg italic leading-relaxed prose prose-p:my-0 max-w-none break-words w-full px-8 mb-8 font-medium">
          "<Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>"
        </div>

        <div className="flex justify-between items-end px-12 mt-auto">
          <div className="text-center">
            <div className="w-32 border-b border-[#2c3e50] mb-1"></div>
            <div className="text-xs uppercase font-bold tracking-widest">
              Date
            </div>
          </div>

          {/* Gold Seal */}
          <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase text-center shadow-lg border-4 border-yellow-600 border-dashed transform rotate-12">
            Certified
            <br />
            Classic
          </div>

          <div className="text-center">
            <div className="w-32 border-b border-[#2c3e50] mb-1 font-cursive text-xl">
              The Internet
            </div>
            <div className="text-xs uppercase font-bold tracking-widest">
              Signature
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
