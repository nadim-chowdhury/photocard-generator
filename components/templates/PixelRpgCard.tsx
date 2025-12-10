import React from "react";
import { PhotocardTemplateProps } from "@/types";
import {
  Twitch,
  Youtube,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "twitch":
      return <Twitch className="w-3 h-3" />;
    case "youtube":
      return <Youtube className="w-3 h-3" />;
    case "twitter":
      return <Twitter className="w-3 h-3" />;
    case "instagram":
      return <Instagram className="w-3 h-3" />;
    default:
      return null;
  }
};

export const PixelRpgCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[300px] h-auto bg-slate-800 text-white relative font-mono p-4"
      style={{ imageRendering: "pixelated" }}
    >
      {/* Border Frame */}
      <div className="absolute inset-0 border-4 border-white m-2 pointer-events-none z-20"></div>
      <div className="absolute inset-0 border-[8px] border-slate-600 pointer-events-none z-10"></div>

      {/* Scene Background - solid color or simple pattern */}
      <div className="absolute inset-0 bg-[#3a4466] z-0"></div>

      <div className="relative z-10 flex flex-col h-full justify-end pb-4 pl-4 pr-4">
        {/* Character Sprite Area - Just the avatar pixelated */}
        <div className="absolute top-8 left-8 w-15 h-15 bg-black border-2 border-white overflow-hidden">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/pixel-art/svg?seed=RPG"
            }
            alt={data.user.name}
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* Name Tag */}
        <div className="absolute top-8 left-[95px] bg-blue-600 border-2 border-white px-4 h-14">
          <h3 className="text-lg font-bold uppercase tracking-widest text-shadow-sm">
            {data.user.name}
          </h3>
          <p className="text-[10px] opacity-80">LVL 99 {data.user.handle}</p>
        </div>

        {/* Dialogue Box */}
        <div className="bg-blue-900/90 border-4 border-white p-4 relative mt-24 min-h-[140px]">
          <div className="text-lg leading-relaxed typing-effect prose prose-invert max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
          <div className="absolute bottom-3 right-3">
            <ChevronRight size={24} className="stroke-[4px]" />
          </div>
        </div>

        {/* Social Stats */}
        <div className="absolute top-4 right-8 flex flex-col gap-1 items-end">
          {data.socials.slice(0, 2).map((social, idx) => (
            <div
              key={idx}
              className="bg-black/50 px-2 py-0.5 text-[10px] border border-white/50 flex items-center gap-1"
            >
              <SocialIcon platform={social.platform} />
              <span>{social.username}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
