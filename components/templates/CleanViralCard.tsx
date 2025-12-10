import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Twitch, Youtube, Twitter, Instagram, Diamond } from "lucide-react";
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

export const CleanViralCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] bg-white text-zinc-900 p-10 border border-zinc-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative font-sans"
    >
      <div className="flex flex-col items-center mb-8">
        <img
          src={
            data.user.avatarUrl ||
            "https://api.dicebear.com/7.x/identicon/svg?seed=Viral"
          }
          alt={data.user.name}
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4"
        />
        <h2 className="text-xl font-bold tracking-tight">{data.user.name}</h2>
        <p className="text-zinc-400 text-sm font-medium">@{data.user.handle}</p>
      </div>

      <div className="flex items-center justify-center mb-10 prose prose-zinc prose-xl text-center leading-[1.1] tracking-tight font-black break-words w-full">
        <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
        <div className="flex gap-4">
          {/* Only show up to 2 socials to keep it clean, or map all small */}
          {data.socials.slice(0, 3).map((social, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 text-zinc-500 text-xs font-semibold uppercase tracking-wider"
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
