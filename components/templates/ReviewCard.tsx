import React from "react";
import { PhotocardTemplateProps } from "@/types";
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  CheckCircle2,
} from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ReviewCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[350px] bg-white p-8 font-sans border border-zinc-200 relative"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex gap-4">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/initials/svg?seed=Karen"
            }
            alt={data.user.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="font-bold text-zinc-900">{data.user.name}</div>
            <div className="text-zinc-500 text-sm">@{data.user.handle}</div>
          </div>
        </div>
        <div className="text-zinc-400">
          <MoreHorizontal />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <div className="flex text-orange-400">
          <Star size={20} className="fill-orange-400" />
          <Star size={20} className="text-zinc-300" />
          <Star size={20} className="text-zinc-300" />
          <Star size={20} className="text-zinc-300" />
          <Star size={20} className="text-zinc-300" />
        </div>
        <span className="font-bold text-zinc-900 ml-2">1.0 out of 5</span>
      </div>

      <div className="flex items-center gap-1 text-[#b12704] text-xs font-bold uppercase tracking-wide mb-6">
        <span className="text-zinc-900 font-normal">
          Reviewed in the United States on {new Date().toLocaleDateString()}
        </span>
        <span className="h-3 w-px bg-zinc-300 mx-2"></span>
        <CheckCircle2 size={12} className="fill-[#b12704] text-white my-auto" />
        Verified Purchase
      </div>

      <h3 className="font-bold text-lg mb-2">
        Disappointed. Would not recommend.
      </h3>

      <div className="text-zinc-800 text-xl leading-relaxed mb-8 prose prose-zinc max-w-none break-words w-full">
        <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
      </div>

      <div className="text-zinc-500 text-sm mb-4">
        420 people found this helpful
      </div>

      <div className="flex gap-4">
        <button className="flex-1 py-2 border border-zinc-300 rounded-lg shadow-sm text-zinc-700 font-medium text-sm flex items-center justify-center gap-2 bg-white">
          <ThumbsUp size={16} /> Helpful
        </button>
        <button className="flex-1 py-2 border border-zinc-300 rounded-lg shadow-sm text-zinc-700 font-medium text-sm flex items-center justify-center gap-2 bg-white">
          Report Abuse
        </button>
      </div>
    </div>
  );
};
