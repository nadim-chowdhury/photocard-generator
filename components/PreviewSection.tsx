import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Loader2 } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import { PhotocardData } from "@/types";
import { ToxicRoasterCard } from "./templates/ToxicRoasterCard";
import { GalaxyBrainCard } from "./templates/GalaxyBrainCard";
import { CleanViralCard } from "./templates/CleanViralCard";
import { BreakingNewsCard } from "./templates/BreakingNewsCard";
import { PixelRpgCard } from "./templates/PixelRpgCard";
import { WantedPosterCard } from "./templates/WantedPosterCard";
import { MusicPlayerCard } from "./templates/MusicPlayerCard";
import { AchievementCard } from "./templates/AchievementCard";
import { NotificationCard } from "./templates/NotificationCard";
import { NewspaperCard } from "./templates/NewspaperCard";
import { generateCaptions } from "@/utils/captionGenerator";

interface PreviewSectionProps {
  data: PhotocardData;
  activeTemplate: string;
  setData: (data: PhotocardData) => void;
}

export default function PreviewSection({
  data,
  activeTemplate,
  setData,
}: PreviewSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [generatedCaptions, setGeneratedCaptions] = useState<string[]>([]);

  const handleDownload = async () => {
    // The specific template wrapper needs to be targeted.
    // We pass an ID to the template component to make it easy to select.
    const element = document.getElementById("photocard-export");
    if (!element) return;

    setIsDownloading(true);
    try {
      const dataUrl = await toPng(element, { cacheBust: true, pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `photocard_${activeTemplate}_${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download image", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleGenerateCaptions = () => {
    const caps = generateCaptions(activeTemplate, data.content);
    setGeneratedCaptions(caps);
  };

  const renderTemplate = () => {
    switch (activeTemplate) {
      case "toxic":
        return <ToxicRoasterCard id="photocard-export" data={data} />;
      case "galaxy":
        return <GalaxyBrainCard id="photocard-export" data={data} />;
      case "clean":
        return <CleanViralCard id="photocard-export" data={data} />;
      case "news":
        return <BreakingNewsCard id="photocard-export" data={data} />;
      case "rpg":
        return <PixelRpgCard id="photocard-export" data={data} />;
      case "wanted":
        return <WantedPosterCard id="photocard-export" data={data} />;
      case "music":
        return <MusicPlayerCard id="photocard-export" data={data} />;
      case "achievement":
        return <AchievementCard id="photocard-export" data={data} />;
      case "notification":
        return <NotificationCard id="photocard-export" data={data} />;
      case "newspaper":
        return <NewspaperCard id="photocard-export" data={data} />;
      default:
        return <CleanViralCard id="photocard-export" data={data} />;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Post Input Area - Directly part of the Preview flow */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <label className="block text-sm font-semibold mb-2 text-zinc-500">
          Post Content
        </label>
        <div
          data-color-mode="auto"
          className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800"
        >
          <MDEditor
            value={data.content}
            onChange={(val?: string) =>
              setData({ ...data, content: val || "" })
            }
            preview="edit"
            height={200}
            className="w-full !bg-zinc-50 dark:!bg-black !text-zinc-900 dark:!text-zinc-100"
            textareaProps={{
              placeholder: "Type your viral post here... (Supports Markdown!)",
            }}
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-zinc-400">
            {data.content.length} chars
          </span>
          <button
            onClick={handleGenerateCaptions}
            className="text-xs text-blue-500 font-medium hover:underline flex items-center gap-1"
          >
            ✨ Generate Caption (AI)
          </button>
        </div>

        {/* Display Generated Captions */}
        {generatedCaptions.length > 0 && (
          <div className="mt-4 p-3 bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-lg space-y-2 animate-in fade-in slide-in-from-top-2">
            <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Viral Captions
            </h4>
            {generatedCaptions.map((cap, i) => (
              <div
                key={i}
                className="group relative p-2 text-sm text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-900 rounded border border-zinc-100 dark:border-zinc-800 hover:border-blue-500 cursor-pointer transition-colors"
                onClick={() => navigator.clipboard.writeText(cap)}
                title="Click to Copy"
              >
                <p className="whitespace-pre-wrap">{cap}</p>
                <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-[10px] bg-blue-100 text-blue-800 px-1 rounded">
                  COPY
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 min-h-[500px] bg-zinc-100 dark:bg-zinc-950 rounded-xl flex items-center justify-center p-8 overflow-auto border border-zinc-100 dark:border-zinc-900 relative">
        <div className="scale-[0.8] md:scale-100 origin-center transition-all duration-300">
          {renderTemplate()}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all disabled:opacity-50"
        >
          {isDownloading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Download size={20} />
          )}
          Download Photocard
        </button>
      </div>
    </div>
  );
}
