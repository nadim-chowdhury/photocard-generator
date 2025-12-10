import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Scroll, CheckSquare, XSquare, MapPin } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const QuestLogCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[600px] bg-[#2c1a0e] text-[#d4c5a3] font-serif p-0 relative border-[8px] border-[#4a2e16]"
    >
      {/* Paper Background */}
      <div className="absolute inset-0 m-2 bg-[#e6dcc0] shadow-inner flex flex-col p-8 text-[#3d2b1f]">
        <div className="flex justify-between items-center border-b-2 border-[#3d2b1f] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <Scroll size={32} />
            <h1 className="text-3xl font-bold uppercase tracking-wider">
              Quest Log
            </h1>
          </div>
          <div className="text-sm font-bold uppercase bg-[#3d2b1f] text-[#e6dcc0] px-3 py-1 rounded">
            Level 1 Crook
          </div>
        </div>

        <div className="flex-1 flex gap-2">
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
              <span className="text-red-700 font-black">QUEST FAILED:</span>
              Understanding the Point
            </h2>
            <div className="text-sm italic mb-4 opacity-70 flex items-center gap-1">
              <MapPin size={12} /> Region: The Internet
            </div>

            <div className="mb-6 font-medium text-lg leading-relaxed prose prose-stone max-w-none break-words w-full">
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>

            <h3 className="font-bold uppercase text-sm mb-2 border-b border-[#3d2b1f]/20 pb-1">
              Objectives:
            </h3>
            <ul className="space-y-2 font-medium">
              <li className="flex items-center gap-2 text-zinc-500 line-through decoration-2 decoration-red-500/50">
                <CheckSquare size={16} /> Make a valid argument
              </li>
              <li className="flex items-center gap-2 text-red-700 font-bold">
                <XSquare size={16} /> Don't embarrass yourself
              </li>
              <li className="flex items-center gap-2 text-zinc-500">
                <CheckSquare size={16} /> Touch grass (Optional)
              </li>
            </ul>
          </div>

          {/* Right Portrait */}
          <div className="w-32 shrink-0 flex flex-col gap-2">
            <div className="w-full aspect-[3/4] bg-[#3d2b1f] p-1 shadow-lg -rotate-2">
              <img
                src={
                  data.user.avatarUrl ||
                  "https://api.dicebear.com/7.x/adventurer/svg?seed=Quest"
                }
                alt={data.user.name}
                className="w-full h-full object-cover sepia-[0.3]"
              />
            </div>
            <div className="text-center text-xs font-bold uppercase tracking-widest mt-2">
              NPC: {data.user.handle}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 text-center text-xs font-bold uppercase opacity-50">
          Press [ESC] to abandon dignity
        </div>
      </div>
    </div>
  );
};
