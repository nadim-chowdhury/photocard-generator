import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { MessageCircle, Bell, X, Share2 } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const NotificationCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[300px] flex items-center justify-center p-12 relative overflow-hidden font-sans"
    >
      {/* Blurred iOS-style Wallpaper Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop")`,
          filter: "blur(10px) brightness(0.8)",
        }}
      ></div>

      {/* Notification Container */}
      <div className="relative z-10 w-full bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white animate-in slide-in-from-top-4 duration-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wide opacity-90">
                MESSAGES
              </h3>
              <p className="text-xs opacity-70">now</p>
            </div>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <Bell size={16} />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex gap-4">
          <div className="shrink-0">
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Notification"
              }
              alt={data.user.name}
              className="w-14 h-14 rounded-full border-2 border-white/50 shadow-sm"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">{data.user.name}</h2>
            <p className="text-sm opacity-75 mb-2">@{data.user.handle}</p>

            <div className="text-lg leading-relaxed text-white/95 font-medium prose prose-invert max-w-none break-words w-full">
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-sm font-semibold opacity-80">
          <button className="hover:text-white transition-colors">Manage</button>
          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">View</button>
            <button className="hover:text-white transition-colors">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
