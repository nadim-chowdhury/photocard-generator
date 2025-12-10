import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Twitch, Youtube, Twitter, Instagram, Brain } from "lucide-react";
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

export const GalaxyBrainCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 text-white p-8 border border-white/10 shadow-2xl relative overflow-hidden"
    >
      {/* Background Stars/Orbs */}
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={
                  data.user.avatarUrl ||
                  "https://api.dicebear.com/7.x/bottts/svg?seed=Galaxy"
                }
                alt={data.user.name}
                className="w-14 h-14 rounded-xl border border-white/20 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-indigo-500 p-1 rounded-full">
                <Brain size={14} className="text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                {data.user.name}
              </h2>
              <p className="text-indigo-300 text-sm">@{data.user.handle}</p>
            </div>
          </div>

          <div className="text-xs font-mono text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-500/30">
            IQ: ∞
          </div>
        </div>

        <div className="min-h-[180px] flex items-center justify-center mb-8">
          <div className="text-2xl md:text-3xl font-serif italic text-center text-blue-50 leading-relaxed drop-shadow-md prose prose-invert prose-indigo max-w-none break-words w-full">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-sm text-indigo-200/80 border-t border-white/10 pt-4">
          {data.socials.map((social, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5"
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
