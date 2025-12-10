import React from "react";
import { PhotocardTemplateProps } from "@/types";
import {
  ArrowBigUp,
  ArrowBigDown,
  MessageSquare,
  Share,
  MoreHorizontal,
  Gift,
} from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const RedditCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#0b1416] text-[#d7dadc] font-sans border border-[#343536] rounded shadow-xl flex"
    >
      {/* Sidebar (Vote) */}
      <div className="w-12 bg-[#0b1416] p-2 flex flex-col items-center gap-1 border-r border-[#343536]/0">
        <ArrowBigUp size={28} className="text-[#818384] hover:text-[#d93a00]" />
        <span className="font-bold text-sm">0</span>
        <ArrowBigDown
          size={28}
          className="text-[#9494ff]"
          fill="currentColor"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-2 pt-3 pr-4">
        {/* Header */}
        <div className="flex items-center gap-2 text-xs text-[#818384] mb-2">
          <div className="flex items-center gap-1 font-bold text-[#d7dadc]">
            <div className="w-5 h-5 rounded-full bg-blue-500"></div>
            r/ConfidentlyIncorrect
          </div>
          <span>•</span>
          <span>Posted by u/{data.user.handle}</span>
          <span>•</span>
          <span>now</span>

          <div className="ml-auto flex gap-1">
            <div className="flex items-center gap-1 bg-[#272729] px-2 py-0.5 rounded-full text-xs font-bold text-yellow-500 border border-yellow-500/30">
              <Gift size={12} /> Gold
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-medium text-[#d7dadc] mb-4 leading-snug">
          AITA for posting this absolutely terrible take on the internet?
        </h1>

        {/* Body Text */}
        <div className="bg-[#1a1a1b] p-4 rounded border border-[#343536] mb-4 relative">
          <div className="text-sm leading-relaxed prose prose-invert prose-p:my-2 max-w-none break-words w-full text-[#d7dadc]">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
          {/* Faded Gradient at bottom to imply "More" */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#1a1a1b] to-transparent"></div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-2 text-[#818384] text-xs font-bold">
          <div className="flex items-center gap-2 bg-[#272729] px-3 py-2 rounded-sm hover:bg-[#3d3d3f]">
            <MessageSquare size={16} /> 6.9k Comments
          </div>
          <div className="flex items-center gap-2 bg-[#272729] px-3 py-2 rounded-sm hover:bg-[#3d3d3f]">
            <Share size={16} /> Share
          </div>
          <div className="flex items-center gap-2 bg-[#272729] px-3 py-2 rounded-sm hover:bg-[#3d3d3f]">
            <MoreHorizontal size={16} /> Save
          </div>
        </div>
      </div>
    </div>
  );
};
