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
import { DefinitionCard } from "./templates/DefinitionCard";
import { ErrorWindowCard } from "./templates/ErrorWindowCard";
import { FactCheckCard } from "./templates/FactCheckCard";
import { ReviewCard } from "./templates/ReviewCard";
import { SearchCard } from "./templates/SearchCard";
import { ReceiptCard } from "./templates/ReceiptCard";
import { NutritionCard } from "./templates/NutritionCard";
import { WarningCard } from "./templates/WarningCard";
import { WikiCard } from "./templates/WikiCard";
import { ChartCard } from "./templates/ChartCard";
import { FpsHudCard } from "./templates/FpsHudCard";
import { VisualNovelCard } from "./templates/VisualNovelCard";
import { TcgCard } from "./templates/TcgCard";
import { ItemShopCard } from "./templates/ItemShopCard";
import { CharSelectCard } from "./templates/CharSelectCard";
import { QuestLogCard } from "./templates/QuestLogCard";
import { InventoryCard } from "./templates/InventoryCard";
import { RtsTooltipCard } from "./templates/RtsTooltipCard";
import { VsScreenCard } from "./templates/VsScreenCard";
import { LootDropCard } from "./templates/LootDropCard";
import { TubeCard } from "./templates/TubeCard";
import { ClownCard } from "./templates/ClownCard";
import { ChatCard } from "./templates/ChatCard";
import { QuoteCard } from "./templates/QuoteCard";
import { StreamCard } from "./templates/StreamCard";
import { CreditCard } from "./templates/CreditCard";
import { CaptchaCard } from "./templates/CaptchaCard";
import { WrappedCard } from "./templates/WrappedCard";
import { BillboardCard } from "./templates/BillboardCard";
import { AlertCard } from "./templates/AlertCard";
import { NotesCard } from "./templates/NotesCard";
import { AuraCard } from "./templates/AuraCard";
import { ImpactCard } from "./templates/ImpactCard";
import { TerminalCard } from "./templates/TerminalCard";
import { PaperCard } from "./templates/PaperCard";
import { NeonCard } from "./templates/NeonCard";
import { BoardCard } from "./templates/BoardCard";
import { CinemaCard } from "./templates/CinemaCard";
import { SignCard } from "./templates/SignCard";
import { LockScreenCard } from "./templates/LockScreenCard";
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
      case "definition":
        return <DefinitionCard id="photocard-export" data={data} />;
      case "error":
        return <ErrorWindowCard id="photocard-export" data={data} />;
      case "fact":
        return <FactCheckCard id="photocard-export" data={data} />;
      case "review":
        return <ReviewCard id="photocard-export" data={data} />;
      case "search":
        return <SearchCard id="photocard-export" data={data} />;
      case "receipt":
        return <ReceiptCard id="photocard-export" data={data} />;
      case "nutrition":
        return <NutritionCard id="photocard-export" data={data} />;
      case "warning":
        return <WarningCard id="photocard-export" data={data} />;
      case "wiki":
        return <WikiCard id="photocard-export" data={data} />;
      case "chart":
        return <ChartCard id="photocard-export" data={data} />;
      case "fps":
        return <FpsHudCard id="photocard-export" data={data} />;
      case "visualnovel":
        return <VisualNovelCard id="photocard-export" data={data} />;
      case "tcg":
        return <TcgCard id="photocard-export" data={data} />;
      case "shop":
        return <ItemShopCard id="photocard-export" data={data} />;
      case "fighter":
        return <CharSelectCard id="photocard-export" data={data} />;
      case "quest":
        return <QuestLogCard id="photocard-export" data={data} />;
      case "inventory":
        return <InventoryCard id="photocard-export" data={data} />;
      case "rts":
        return <RtsTooltipCard id="photocard-export" data={data} />;
      case "vs":
        return <VsScreenCard id="photocard-export" data={data} />;
      case "loot":
        return <LootDropCard id="photocard-export" data={data} />;
      case "tube":
        return <TubeCard id="photocard-export" data={data} />;
      case "clown":
        return <ClownCard id="photocard-export" data={data} />;
      case "chat":
        return <ChatCard id="photocard-export" data={data} />;
      case "quote":
        return <QuoteCard id="photocard-export" data={data} />;
      case "stream":
        return <StreamCard id="photocard-export" data={data} />;
      case "credit":
        return <CreditCard id="photocard-export" data={data} />;
      case "captcha":
        return <CaptchaCard id="photocard-export" data={data} />;
      case "wrapped":
        return <WrappedCard id="photocard-export" data={data} />;
      case "billboard":
        return <BillboardCard id="photocard-export" data={data} />;
      case "alert":
        return <AlertCard id="photocard-export" data={data} />;
      case "notes":
        return <NotesCard id="photocard-export" data={data} />;
      case "aura":
        return <AuraCard id="photocard-export" data={data} />;
      case "impact":
        return <ImpactCard id="photocard-export" data={data} />;
      case "terminal":
        return <TerminalCard id="photocard-export" data={data} />;
      case "paper":
        return <PaperCard id="photocard-export" data={data} />;
      case "neon":
        return <NeonCard id="photocard-export" data={data} />;
      case "board":
        return <BoardCard id="photocard-export" data={data} />;
      case "cinema":
        return <CinemaCard id="photocard-export" data={data} />;
      case "sign":
        return <SignCard id="photocard-export" data={data} />;
      case "lock":
        return <LockScreenCard id="photocard-export" data={data} />;
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
