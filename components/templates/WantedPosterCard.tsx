import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Twitch, Youtube, Twitter, Instagram, Skull } from "lucide-react";
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

export const WantedPosterCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[800px] bg-[#e8dcb5] text-[#4a3b2a] p-8 relative font-serif flex flex-col items-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4c5a0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Burned Edges Effect (Simulated with shadow inset) */}
      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(74,59,42,0.6)] pointer-events-none"></div>

      <div className="w-full border-4 border-[#4a3b2a] p-2 mb-6 relative z-10">
        <div className="border-2 border-[#4a3b2a] p-4 text-center">
          <h1 className="text-6xl font-black uppercase tracking-widest mb-2 scale-y-125">
            WANTED
          </h1>
          <p className="text-xl font-bold uppercase tracking-[0.2em] mb-4">
            Dead or Alive
          </p>
        </div>
      </div>

      <div className="w-full flex-1 flex flex-col items-center relative z-10">
        <div className="w-[350px] h-[350px] bg-[#cbb890] p-4 shadow-lg rotate-1 mb-8">
          <img
            src={
              data.user.avatarUrl ||
              "https://api.dicebear.com/7.x/micah/svg?seed=Outlaw"
            }
            alt={data.user.name}
            className="w-full h-full object-cover grayscale contrast-125 sepia"
          />
        </div>

        <h2 className="text-3xl font-black uppercase mb-2">{data.user.name}</h2>
        <p className="font-bold text-[#6b553e] mb-8">
          AKA: @{data.user.handle}
        </p>

        <div className="w-full border-t-2 border-b-2 border-[#4a3b2a] py-6 mb-8 text-center bg-[#4a3b2a]/5">
          <p className="text-sm font-bold uppercase mb-2">
            Crimes / Description:
          </p>
          <div className="text-2xl font-bold leading-relaxed prose prose-stone max-w-none break-words w-full px-4">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>

        <div className="flex gap-6 text-[#4a3b2a] font-bold uppercase tracking-wider text-sm">
          {data.socials.map((social, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <SocialIcon platform={social.platform} />
              <span>{social.username}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-4xl font-black scale-y-125 tracking-widest flex items-center gap-4">
          <Skull size={32} />
          REWARD: $1,000,000
          <Skull size={32} />
        </div>
      </div>
    </div>
  );
};
