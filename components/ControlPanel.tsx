import React from "react";
import { UserProfile, SocialProfile } from "@/types";
import { Plus, Trash2 } from "lucide-react";

interface ControlPanelProps {
  user: UserProfile;
  setUser: (user: UserProfile) => void;
  socials: SocialProfile[];
  setSocials: (socials: SocialProfile[]) => void;
  activeTemplate: string;
  setActiveTemplate: (id: string) => void;
}

const TemplateButton = ({
  id,
  active,
  onClick,
}: {
  id: string;
  active: string;
  onClick: (id: string) => void;
}) => (
  <button
    onClick={() => onClick(id)}
    className={`p-3 text-xs font-medium rounded-lg border-2 transition-all truncate
      ${
        active === id
          ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30"
          : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600"
      }
    `}
  >
    {id.toUpperCase()}
  </button>
);

export default function ControlPanel({
  user,
  setUser,
  socials,
  setSocials,
  activeTemplate,
  setActiveTemplate,
}: ControlPanelProps) {
  const handleSocialChange = (
    index: number,
    field: keyof SocialProfile,
    value: string
  ) => {
    const newSocials = [...socials];
    newSocials[index] = { ...newSocials[index], [field]: value };
    setSocials(newSocials);
  };

  const addSocial = () => {
    if (socials.length < 4) {
      setSocials([...socials, { platform: "twitter", username: "@username" }]);
    }
  };

  const removeSocial = (index: number) => {
    const newSocials = socials.filter((_, i) => i !== index);
    setSocials(newSocials);
  };

  return (
    <div className="space-y-8 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
      {/* Template Selector with Categories */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Select Template
        </h3>

        {/* Categories: Viral, News, Sarcasm, Gaming */}
        <div className="flex flex-col gap-4">
          {/* Viral */}
          <div>
            <div className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-tight">
              Viral & Social
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "toxic",
                "galaxy",
                "clean",
                "wanted",
                "music",
                "notification",
              ].map((t) => (
                <TemplateButton
                  key={t}
                  id={t}
                  active={activeTemplate}
                  onClick={setActiveTemplate}
                />
              ))}
            </div>
          </div>

          {/* Sarcasm */}
          <div>
            <div className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-tight">
              High IQ Sarcasm
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "definition",
                "error",
                "fact",
                "review",
                "search",
                "receipt",
                "nutrition",
                "warning",
                "wiki",
                "chart",
              ].map((t) => (
                <TemplateButton
                  key={t}
                  id={t}
                  active={activeTemplate}
                  onClick={setActiveTemplate}
                />
              ))}
            </div>
          </div>

          {/* Typography Collection */}
          <div>
            <div className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-tight">
              Viral Typography
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "notes",
                "aura",
                "impact",
                "terminal",
                "paper",
                "neon",
                "board",
                "cinema",
                "sign",
                "lock",
              ].map((t) => (
                <TemplateButton
                  key={t}
                  id={t}
                  active={activeTemplate}
                  onClick={setActiveTemplate}
                />
              ))}
            </div>
          </div>

          {/* Meme & Social Trend Collection */}
          <div>
            <div className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-tight">
              Meme & Trends
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "tube",
                "clown",
                "chat",
                "quote",
                "stream",
                "credit",
                "captcha",
                "wrapped",
                "billboard",
                "alert",
              ].map((t) => (
                <TemplateButton
                  key={t}
                  id={t}
                  active={activeTemplate}
                  onClick={setActiveTemplate}
                />
              ))}
            </div>
          </div>

          {/* Gaming Collection */}
          <div>
            <div className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-tight">
              Gaming Collection
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "rpg",
                "achievement",
                "fps",
                "visualnovel",
                "tcg",
                "shop",
                "fighter",
                "quest",
                "inventory",
                "rts",
                "vs",
                "loot",
              ].map((t) => (
                <TemplateButton
                  key={t}
                  id={t}
                  active={activeTemplate}
                  onClick={setActiveTemplate}
                />
              ))}
            </div>
          </div>

          {/* News */}
          <div>
            <div className="text-xs font-bold text-zinc-400 mb-2 uppercase tracking-tight">
              News & Media
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                "news",
                "newspaper",
                "tabloid",
                "magazine",
                "journal",
                "wanted_poster",
                "mugshot",
                "paparazzi",
                "reality",
                "talk",
                "weather",
                "review",
                "reddit",
                "stock",
                "scoreboard",
                "horoscope",
                "podcast",
                "ticket",
                "certificate",
                "topten",
                "auction",
              ].map((t) => (
                <TemplateButton
                  key={t}
                  id={t}
                  active={activeTemplate}
                  onClick={setActiveTemplate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Attributes */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Profile Identity
        </h3>
        <div className="grid gap-3">
          <input
            type="text"
            placeholder="Display Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="w-full p-2 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="@handle"
            value={user.handle}
            onChange={(e) => setUser({ ...user, handle: e.target.value })}
            className="w-full p-2 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-md text-sm"
          />
          <input
            type="text"
            placeholder="Avatar URL (optional)"
            value={user.avatarUrl}
            onChange={(e) => setUser({ ...user, avatarUrl: e.target.value })}
            className="w-full p-2 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-md text-sm text-zinc-500"
          />
        </div>
      </div>

      {/* Socials */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Social Handles
          </h3>
          <button
            onClick={addSocial}
            className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded"
          >
            <Plus size={16} />
          </button>
        </div>
        <div className="space-y-3">
          {socials.map((social, idx) => (
            <div key={idx} className="flex gap-2">
              <select
                value={social.platform}
                onChange={(e) =>
                  handleSocialChange(idx, "platform", e.target.value as any)
                }
                className="p-2 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-md text-sm w-1/3"
              >
                <option value="twitter">Tw/X</option>
                <option value="youtube">YT</option>
                <option value="twitch">TTV</option>
                <option value="instagram">IG</option>
              </select>
              <input
                type="text"
                value={social.username}
                onChange={(e) =>
                  handleSocialChange(idx, "username", e.target.value)
                }
                className="p-2 bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-md text-sm flex-1"
              />
              <button
                onClick={() => removeSocial(idx)}
                className="text-zinc-400 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
