import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Twitch, Youtube, Twitter, Instagram } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "twitch":
      return <Twitch className="w-4 h-4" />;
    case "youtube":
      return <Youtube className="w-4 h-4" />;
    case "twitter":
      return <Twitter className="w-4 h-4" />;
    case "instagram":
      return <Instagram className="w-4 h-4" />;
    default:
      return null;
  }
};

export const ToxicRoasterCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] bg-black text-green-500 font-mono p-8 border-4 border-green-600 shadow-[0_0_20px_rgba(22,163,74,0.5)] relative overflow-hidden"
    >
      {/* Glitch Overlay Effect could be added here */}
      <div className="absolute top-0 left-0 w-full h-2 bg-green-600" />

      <div className="flex items-center gap-4 mb-6 border-b border-green-800 pb-4">
        <img
          src={
            data.user.avatarUrl ||
            "https://api.dicebear.com/7.x/avataaars/svg?seed=Roaster"
          }
          alt={data.user.name}
          className="w-16 h-16 rounded-none border-2 border-green-500"
        />
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-widest">
            {data.user.name}
          </h2>
          <p className="text-green-700">@{data.user.handle}</p>
        </div>
      </div>

      <div className="min-h-[200px] flex items-center justify-center p-4 border border-green-900 bg-green-950/20 mb-6 relative">
        <div className="text-3xl font-black text-center leading-tight drop-shadow-[2px_2px_0_rgba(0,0,0,1)] prose prose-invert prose-green max-w-none break-words w-full">
          <Markdown
            remarkPlugins={[remarkBreaks]}
          >{`"${data.content}"`}</Markdown>
        </div>
        <span className="absolute -top-3 left-4 bg-black px-2 text-xs text-green-700 border border-green-900">
          WARNING: TOXIC
        </span>
      </div>

      <div className="flex justify-between items-center text-sm text-green-800 font-bold uppercase">
        <div className="flex gap-4">
          {data.socials.map((social, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <SocialIcon platform={social.platform} />
              <span>{social.username}</span>
            </div>
          ))}
        </div>
        <div>RAPID RESPONSE UNIT</div>
      </div>
    </div>
  );
};
