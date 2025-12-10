import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { ChevronLeft, Info, Phone, Video } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ChatCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[400px] min-h-[600px] bg-black text-white font-sans flex flex-col relative"
    >
      {/* Header */}
      <div className="bg-[#1e1e1e]/90 backdrop-blur-md p-4 flex items-center justify-between sticky top-0 z-20 border-b border-zinc-800">
        <div className="flex items-center gap-1 text-blue-500">
          <ChevronLeft size={24} />
          <span className="text-lg">99+</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden mb-1">
            <img
              src={data.user.avatarUrl}
              alt={data.user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs font-bold text-zinc-200">
            {data.user.name}
          </span>
        </div>
        <div className="flex items-center gap-4 text-blue-500">
          <Video size={20} />
          <Phone size={20} />
          <Info size={20} />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 space-y-6 flex flex-col justify-end">
        <div className="text-center text-xs text-zinc-500 font-bold my-4">
          Today 3:42 AM
        </div>

        {/* Incoming Message (The Bad Take) */}
        <div className="flex items-end gap-2 max-w-[85%]">
          <div className="w-6 h-6 rounded-full bg-zinc-700 overflow-hidden shrink-0">
            <img
              src={data.user.avatarUrl}
              alt={data.user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#262626] text-white px-4 py-3 rounded-2xl rounded-bl-sm text-sm leading-relaxed prose prose-invert max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>

        {/* User Reply (The Roast) */}
        <div className="self-end flex items-end gap-2 max-w-[70%]">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-br-sm text-sm">
            Who is this?
          </div>
        </div>
        <div className="self-end text-[10px] text-zinc-500 font-bold">
          Read 3:45 AM
        </div>
      </div>

      {/* Input Placeholder */}
      <div className="p-3 bg-black border-t border-zinc-800 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-lg">
          +
        </div>
        <div className="flex-1 h-8 rounded-full bg-[#1c1c1e] border border-zinc-700 px-3 text-sm text-white flex items-center">
          iMessage
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          ↑
        </div>
      </div>
    </div>
  );
};
