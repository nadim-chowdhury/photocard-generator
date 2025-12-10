import React from "react";
import { PhotocardTemplateProps } from "@/types";
import {
  Twitch,
  Youtube,
  Twitter,
  Instagram,
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Heart,
} from "lucide-react";
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

export const MusicPlayerCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[800px] bg-zinc-900 text-white p-8 relative overflow-hidden font-sans flex flex-col"
    >
      {/* Ambient Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-black z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center text-xs font-bold tracking-widest uppercase text-zinc-400 mb-8">
          Now Playing from {data.user.handle}
        </div>

        {/* Album Art (User Profile) */}
        <div className="w-full aspect-square max-w-[400px] mx-auto bg-zinc-800 rounded-lg shadow-2xl mb-12 relative overflow-hidden group">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/identicon/svg?seed=Vibes"
            }
            alt={data.user.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Track Info (User Name & Content) */}
        <div className="px-4 mb-8">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h2 className="text-3xl font-bold mb-1">{data.user.name}</h2>
              <div className="text-zinc-400 text-sm font-medium flex gap-2">
                {data.socials.slice(0, 1).map((s) => (
                  <span key={s.platform}>@{s.username}</span>
                ))}
              </div>
            </div>
            <Heart className="text-green-500 fill-green-500 w-8 h-8" />
          </div>

          {/* Lyrics / Content Area */}
          <div className="mt-8 mb-8">
            <div className="text-2xl font-semibold leading-relaxed text-zinc-100 prose prose-invert max-w-none break-words w-full">
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full px-4 mb-8 mt-auto">
          <div className="w-full h-1 bg-zinc-700 rounded-full mb-2">
            <div className="w-2/3 h-1 bg-white rounded-full relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-zinc-400 font-medium font-mono">
            <span>2:45</span>
            <span>4:20</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center px-8 pb-4">
          <Shuffle className="text-zinc-500 w-6 h-6" />
          <SkipBack className="text-white w-8 h-8" />
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
            <Play className="w-8 h-8 fill-black ml-1" />
          </div>
          <SkipForward className="text-white w-8 h-8" />
          <Repeat className="text-green-500 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
