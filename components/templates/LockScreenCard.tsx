import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Flashlight, Camera, Lock } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const LockScreenCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Date().toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      id={id}
      className="w-[450px] min-h-[600px] bg-black relative flex flex-col font-sans overflow-hidden"
    >
      {/* Background Image (User Avatar Blown Up) */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.user.avatarUrl}
          className="w-full h-full object-cover opacity-60 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>

      {/* Time/Date Header */}
      <div className="relative z-10 w-full text-center pt-16 text-white drop-shadow-md">
        <div className="flex justify-center mb-2">
          <Lock size={20} fill="currentColor" />
        </div>
        <div className="text-xl font-medium">{date}</div>
        <div className="text-7xl font-light tracking-tight">{time}</div>
      </div>

      {/* Notification Area */}
      <div className="relative z-10 w-full p-4 mt-8 space-y-2">
        {/* The Viral Post as a Notification */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 text-white shadow-lg border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-black rounded-md flex items-center justify-center font-bold text-[10px]">
                X
              </div>
              <span className="text-xs font-bold uppercase tracking-wide">
                X (Twitter)
              </span>
            </div>
            <span className="text-xs text-white/80">now</span>
          </div>

          <div className="font-bold text-sm mb-1">{data.user.name}</div>
          <div className="text-sm leading-snug prose prose-invert prose-p:my-0 max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>

        {/* Fake generic notification */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 text-white shadow-lg border border-white/20 opacity-60 scale-95 origin-top">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-md flex items-center justify-center font-bold text-[10px]">
                M
              </div>
              <span className="text-xs font-bold uppercase tracking-wide">
                Messages
              </span>
            </div>
            <span className="text-xs text-white/80">5m ago</span>
          </div>
          <div className="font-bold text-sm">Mom</div>
          <div className="text-sm">Why did you post that?</div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="mt-auto relative z-10 w-full flex justify-between px-12 pb-12 text-white">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition">
          <Flashlight size={24} fill="currentColor" />
        </div>
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition">
          <Camera size={24} fill="currentColor" />
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white rounded-full z-10"></div>
    </div>
  );
};
