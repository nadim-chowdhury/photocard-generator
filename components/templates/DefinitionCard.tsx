import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { BookOpen, Volume2, Share2, Bookmark } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const DefinitionCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-white text-zinc-900 p-12 font-serif relative overflow-hidden flex flex-col justify-center"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-6xl font-black tracking-tight mb-2 text-zinc-900">
            {data.user.name.toLowerCase()}
          </h1>
          <div className="flex items-center gap-4 text-zinc-500 text-xl font-sans">
            <span>/{data.user.handle}</span>
            <span className="italic">noun</span>
            <Volume2 className="w-6 h-6 cursor-pointer hover:text-blue-600" />
          </div>
        </div>
        <BookOpen className="w-12 h-12 text-zinc-200" />
      </div>

      <div className="w-full h-px bg-zinc-200 mb-8"></div>

      <div className="mb-8">
        <ol className="list-decimal pl-6 space-y-4 text-2xl leading-relaxed font-medium">
          <li className="pl-4">
            <div className="prose prose-xl prose-zinc max-w-none break-words w-full">
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>
          </li>
          <li className="pl-4 opacity-40 text-zinc-400">
            See also: <span className="italic underline">delusion</span>,{" "}
            <span className="italic underline">clown behavior</span>.
          </li>
        </ol>
      </div>

      <div className="mt-auto pt-8 border-t border-zinc-100 flex justify-between items-center text-zinc-400 font-sans text-sm font-bold uppercase tracking-widest">
        <div className="flex gap-4">
          {data.socials.slice(0, 1).map((s) => (
            <span key={s.platform}>@{s.username}</span>
          ))}
        </div>
        <div className="flex gap-4">
          <Share2 size={20} />
          <Bookmark size={20} />
        </div>
      </div>
    </div>
  );
};
