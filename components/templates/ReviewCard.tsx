import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Star, ThumbsDown, MoreHorizontal, Share2 } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ReviewCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[500px] min-h-[400px] bg-white p-8 font-sans border border-zinc-200 shadow-xl flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-100 border border-zinc-200">
            <img
              src={data.user.avatarUrl}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-lg text-zinc-900 leading-none mb-1">
              {data.user.name}
            </h2>
            <div className="text-sm text-zinc-500 flex items-center gap-1">
              <span className="font-medium text-orange-500">Local Menace</span>{" "}
              • 0 Reviews
            </div>
          </div>
        </div>
        <MoreHorizontal className="text-zinc-400" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-zinc-300">
          <Star fill="currentColor" size={24} className="text-orange-400" />
          <Star fill="currentColor" size={24} />
          <Star fill="currentColor" size={24} />
          <Star fill="currentColor" size={24} />
          <Star fill="currentColor" size={24} />
        </div>
        <span className="text-zinc-500 text-sm font-medium">1 minute ago</span>
      </div>

      {/* Content */}
      <div className="text-zinc-800 text-lg leading-relaxed mb-6 prose prose-sm max-w-none break-words w-full">
        <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
      </div>

      {/* Photos (Simulated) */}
      <div className="flex gap-2 h-32 mb-6 overflow-hidden rounded-lg">
        <div className="flex-1 bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 text-xs font-bold">
          Image 1
        </div>
        <div className="flex-1 bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 text-xs font-bold">
          Image 2
        </div>
      </div>

      {/* Footer / Owner Response */}
      <div className="bg-zinc-50 p-4 rounded-lg border-l-4 border-blue-500">
        <div className="text-xs font-bold text-zinc-500 mb-1">
          Response from the owner
        </div>
        <div className="text-sm text-zinc-700 italic">
          "We encourage you to touch grass."
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-6 text-zinc-500 text-sm font-bold">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-zinc-50 px-2 py-1 rounded">
          <ThumbsDown size={18} /> Helpful (0)
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-zinc-50 px-2 py-1 rounded">
          <Share2 size={18} /> Share
        </div>
      </div>
    </div>
  );
};
