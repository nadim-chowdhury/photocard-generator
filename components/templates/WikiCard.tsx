import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Search, Globe, Lock, ExternalLink, Pencil } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const WikiCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[600px] bg-white text-black p-0 font-sans border border-zinc-300 relative"
    >
      {/* Wiki Header */}
      <div className="bg-zinc-50 border-b border-zinc-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-8 h-8 text-zinc-600" />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none">
              Wikipædia
            </span>
            <span className="text-[10px] text-zinc-500">
              The Free Encyclopedia
            </span>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-zinc-500 font-bold items-center">
          <span>Log in</span>
          <div className="bg-white border border-zinc-300 px-2 py-1 flex items-center gap-2 w-48 text-zinc-400 font-normal">
            <Search size={12} /> Search Wikipedia
          </div>
        </div>
      </div>

      <div className="p-8 font-serif">
        {/* Article Title */}
        <div className="border-b border-zinc-300 pb-2 mb-4 flex justify-between items-end">
          <h1 className="text-3xl font-serif italic mb-0 flex items-center gap-2">
            {data.user.name}
            <Lock size={16} className="text-zinc-400" />
          </h1>
          <div className="text-xs font-sans text-zinc-500 flex gap-2">
            <span className="text-blue-600">Read</span>
            <span>View source</span>
            <span>View history</span>
          </div>
        </div>

        <div className="text-sm italic text-zinc-500 mb-4">
          From Wikipedia, the free encyclopedia
        </div>

        {/* Infobox */}
        <div className="float-right w-64 border border-zinc-300 bg-zinc-50 p-1 ml-4 mb-4 text-xs font-sans">
          <div className="bg-[#a7d7f9] p-1 text-center font-bold border border-zinc-300 mb-2">
            {data.user.name}
          </div>
          <div className="border border-zinc-300 bg-white mb-2 p-1">
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/identicon/svg?seed=Wiki"
              }
              alt={data.user.name}
              className="w-full h-auto object-cover"
            />
            <div className="text-center mt-1 text-[10px] text-zinc-500">
              Fig 1. A rare depiction of the subject.
            </div>
          </div>
          <div className="space-y-1 p-2">
            <div className="flex gap-2">
              <span className="font-bold w-16">Born</span>
              <span>Yesterday</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-16">Occupation</span>
              <span>Professional Yapper</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-16">Known for</span>
              <span>Bad takes</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold w-16">Handle</span>
              <span>@{data.user.handle}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="text-base leading-relaxed font-sans text-zinc-800">
          <p className="mb-4">
            <span className="font-bold">{data.user.name}</span> (born yesterday)
            is an internet personality known primarily for posting content that
            lacks factual basis.<sup>[1]</sup>
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 text-sm">
            <div className="font-bold mb-1 flex items-center gap-2 text-red-700">
              <Pencil size={14} /> This article contains controversial opinions.
            </div>
            <div className="italic text-red-600">
              Please help improve this article by adding citations to reliable
              sources.
            </div>
          </div>

          <h2 className="font-serif text-xl border-b border-zinc-300 mt-6 mb-3">
            Controversy [ <span className="text-blue-600 text-xs">edit</span> ]
          </h2>

          <div className="prose prose-sm max-w-none break-words w-full mb-4">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            <sup className="text-blue-600 text-xs cursor-pointer">
              [citation needed]
            </sup>
          </div>
        </div>

        <div className="mt-12 text-xs text-zinc-400 border-t border-zinc-200 pt-4 font-sans">
          This page was last edited on {new Date().toLocaleDateString()}, at{" "}
          {new Date().toLocaleTimeString()}.
        </div>
      </div>
    </div>
  );
};
