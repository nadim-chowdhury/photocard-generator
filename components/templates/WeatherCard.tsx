import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { CloudRain, Sun, Wind, Thermometer } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const WeatherCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-sky-400 relative flex flex-col items-center overflow-hidden font-sans"
    >
      {/* Map Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover opacity-30 mix-blend-multiply bg-center contrast-125"></div>

      {/* Weatherman (User) */}
      <div className="absolute bottom-0 right-12 w-48 h-64 z-10 flex flex-col items-center">
        <img
          src={data.user.avatarUrl}
          className="w-full h-full object-cover drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] border-4 border-white rounded-lg transform rotate-3"
        />
      </div>

      {/* Header */}
      <div className="relative z-20 w-full bg-blue-800 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <Sun className="text-yellow-400 animate-pulse" size={32} />
          <h1 className="text-2xl font-black uppercase italic tracking-tighter">
            Clown Forecast 5000
          </h1>
        </div>
        <div className="font-mono text-xl font-bold">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* Main Stats Panel */}
      <div className="relative z-10 w-[60%] mr-auto m-8 bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl border-2 border-white">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-red-500 text-white p-3 rounded-xl shadow-lg">
            <CloudRain size={48} />
          </div>
          <div>
            <div className="text-xs font-bold uppercase text-zinc-500">
              Current Conditions
            </div>
            <h2 className="text-3xl font-black text-blue-900 leading-none">
              100% CHANCE OF Ls
            </h2>
          </div>
        </div>

        <div className="text-lg font-bold text-zinc-800 leading-snug prose prose-sm max-w-none break-words w-full border-l-4 border-red-500 pl-4">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="mt-auto w-full bg-yellow-400 text-black py-2 overflow-hidden z-20 border-t-4 border-blue-900">
        <div className="whitespace-nowrap font-bold uppercase tracking-widest text-sm flex gap-12">
          <span>⚠️ Severe Cringe Warning in Effect</span>
          <span>🌡️ Highs of 420°F expected in the mentions</span>
          <span>💨 Wind Speed: 69mph (All Hot Air)</span>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-24 right-8 text-white/50 animate-bounce delay-700">
        <Wind size={48} />
      </div>
      <div className="absolute bottom-32 left-8 text-white/50 animate-pulse">
        <Thermometer size={48} />
      </div>
    </div>
  );
};
