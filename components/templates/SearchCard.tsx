import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Search, Mic, Camera, X } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const SearchCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-white text-[#202124] p-8 font-sans border border-zinc-200 flex flex-col"
    >
      {/* Search Bar Header */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl font-bold">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </span>
        <div className="flex-1 h-12 rounded-full border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex items-center px-4 gap-3 bg-white">
          <span className="flex-1 truncate text-zinc-700">
            {data.user.handle} valid points
          </span>
          <X size={20} className="text-zinc-400" />
          <div className="w-px h-6 bg-zinc-200 mx-1"></div>
          <Mic size={20} className="text-blue-500" />
          <Camera size={20} className="text-blue-500" />
          <Search size={20} className="text-blue-500" />
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-100">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/initials/svg?seed=Search"
            }
            alt={data.user.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-6 text-sm text-zinc-500 border-b border-zinc-200 pb-3 px-2 mb-6">
        <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-3 -mb-3 px-1">
          All
        </span>
        <span>Images</span>
        <span>News</span>
        <span>Videos</span>
        <span>Maps</span>
        <span>Shopping</span>
      </div>

      {/* Results Stats */}
      <div className="text-xs text-zinc-500 mb-6 px-2">
        About 0 results (0.42 seconds)
      </div>

      {/* Did you mean... */}
      <div className="px-2 mb-8">
        <div className="text-lg text-red-700 italic mb-2">
          Did you mean:{" "}
          <span className="text-blue-700 font-bold not-italic cursor-pointer underline">
            complete nonsense
          </span>
        </div>
        <div className="text-lg">
          Showing results for{" "}
          <span className="font-bold">{data.user.name}'s bad takes</span>
        </div>
        <div className="text-sm text-zinc-500">
          No results found for <strong>"{data.user.handle} logic"</strong>.
        </div>
      </div>

      {/* Featured Snippet */}
      <div className="mx-2 p-6 rounded-2xl border border-zinc-200 bg-zinc-50">
        <div className="text-sm text-zinc-500 mb-2">
          From sources across the web
        </div>
        <div className="text-xl leading-relaxed font-medium prose prose-zinc max-w-none break-words w-full">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-200 flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
            W
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-800 font-medium">
              Why this is wrong
            </span>
            <span className="text-xs text-zinc-500">
              www.common-sense.org/basic-facts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
