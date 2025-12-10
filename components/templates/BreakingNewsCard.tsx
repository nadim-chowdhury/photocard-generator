import React from "react";
import { PhotocardTemplateProps } from "@/types";
import {
  Twitch,
  Youtube,
  Twitter,
  Instagram,
  Globe,
  Radio,
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

export const BreakingNewsCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[350px] h-auto bg-zinc-900 text-white relative flex flex-col font-sans"
    >
      {/* Background - subtle news room map or gradient */}
      <div className="absolute inset-0 bg-blue-950 opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_2px,transparent_2px)] bg-[size:100%_4px] opacity-20 pointer-events-none z-10"></div>

      {/* Main Content Area */}
      <div className="flex-1 relative z-20 flex p-6 gap-6 items-center">
        {/* User "Reporter" Image */}
        <div className="w-[120px] h-[120px] relative shrink-0">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/personas/svg?seed=Reporter"
            }
            alt={data.user.name}
            className="w-full h-full object-cover border-2 border-white shadow-md"
          />
          <div className="absolute -bottom-6 left-0 right-0 w-full bg-blue-700 text-center text-[10px] font-bold py-1 uppercase tracking-wider">
            {data.user.handle}
          </div>
        </div>

        {/* Headline Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-sm flex items-center gap-1">
              <Radio size={12} /> LIVE
            </span>
            <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
              Global Update
            </span>
          </div>
          <div className="text-2xl font-bold leading-tight font-serif drop-shadow-md prose prose-invert max-w-none break-words w-full">
            <Markdown
              remarkPlugins={[remarkBreaks]}
            >{`"${data.content}"`}</Markdown>
          </div>
        </div>
      </div>

      {/* Lower Thirds */}
      <div className="relative z-20 mt-auto">
        {/* Yellow Ticker Bar */}
        <div className="bg-yellow-400 text-black text-sm font-bold uppercase py-2 px-4 overflow-hidden whitespace-nowrap flex items-center gap-4">
          <span className="bg-black text-yellow-400 px-2 text-xs">
            BREAKING NEWS
          </span>
          <span className="tracking-wide">
            Reported by {data.user.name} • Exclusive Coverage
          </span>
        </div>

        {/* Bottom Info Bar */}
        <div className="bg-blue-900 text-white flex justify-between items-center py-2 px-4 border-t-2 border-blue-800">
          <div className="flex gap-4 text-xs font-medium">
            {data.socials.slice(0, 3).map((social, idx) => (
              <div key={idx} className="flex items-center gap-1.5 opacity-80">
                <SocialIcon platform={social.platform} />
                <span>{social.username}</span>
              </div>
            ))}
          </div>
          <div className="text-xs font-mono text-blue-300 flex items-center gap-1">
            <Globe size={12} /> MNN-8 (Meme News Network)
          </div>
        </div>
      </div>
    </div>
  );
};
