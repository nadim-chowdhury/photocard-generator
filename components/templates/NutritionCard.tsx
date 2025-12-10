import React from "react";
import { PhotocardTemplateProps } from "@/types";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const NutritionCard: React.FC<PhotocardTemplateProps> = ({
  data,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[600px] bg-white text-black p-0 font-sans border border-zinc-200 flex flex-col justify-center items-center py-12"
    >
      <div className="border border-black w-[450px] p-2 bg-white shadow-xl">
        <div className="border-2 border-black p-4">
          <h1 className="text-6xl font-black tracking-tighter leading-none mb-1">
            Nutrition Facts
          </h1>
          <div className="border-b-[10px] border-black pb-2 mb-2">
            <div className="text-xl font-bold flex justify-between">
              <span>Serving Size</span>
              <span>1 Post</span>
            </div>
            <div className="text-lg">Servings Per Container: Too Many</div>
          </div>

          <div className="border-b-[5px] border-black pb-2 mb-2">
            <div className="text-sm font-bold">Amount Per Serving</div>
            <div className="flex justify-between items-end">
              <div className="text-5xl font-black">Audacity</div>
              <div className="text-2xl font-bold">100%</div>
            </div>
          </div>

          <div className="text-right text-sm font-bold border-b border-black pb-1 mb-1">
            % Daily Value*
          </div>

          <div className="border-b border-black py-1 flex justify-between font-bold items-center">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white px-1 text-xs">Total</span>
              <span>Capping / Lying</span>
            </div>
            <span>200%</span>
          </div>
          <div className="border-b border-black py-1 pl-4 flex justify-between font-medium">
            <span>Saturated Logic</span>
            <span className="font-bold">0g</span>
          </div>

          <div className="border-b border-black py-1 flex justify-between font-bold">
            <span>Sodium (Salty)</span>
            <span>50,000mg</span>
          </div>

          <div className="border-b border-black py-1 flex justify-between font-bold">
            <span>Total Carbohydrates</span>
            <span>0g</span>
          </div>
          <div className="border-b border-black py-1 pl-4 flex justify-between font-medium">
            <span>Dietary Fiber (Substance)</span>
            <span className="font-bold">0g</span>
          </div>
          <div className="border-b-[10px] border-black py-1 pl-4 flex justify-between font-medium mb-2">
            <span>Sugar coating</span>
            <span className="font-bold">25g</span>
          </div>

          <div className="border-b border-black py-1 font-bold">Protein 0g</div>

          <div className="border-b border-black py-4 text-xs font-medium">
            *Percent Daily Values are based on a 2,000 calorie diet. Your daily
            values may be higher or lower depending on how online you are.
          </div>

          <div className="pt-4">
            <div className="font-black text-xs uppercase mb-1">
              INGREDIENTS:
            </div>
            <div className="text-sm leading-tight text-justify prose prose-sm max-w-none break-words w-full font-bold">
              <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
            </div>
            <div className="mt-4 pt-4 border-t border-black text-xs font-bold uppercase flex justify-between items-center">
              <span>Distributed by: {data.user.handle}</span>
              <img
                src={
                  data.user.avatarUrl ||
                  "https://api.dicebear.com/7.x/identicon/svg?seed=Food"
                }
                alt={data.user.name}
                className="w-8 h-8 rounded-full border border-black grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
