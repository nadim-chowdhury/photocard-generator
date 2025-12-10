import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Barcode } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ReceiptCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div
      id={id}
      className="w-[600px] min-h-[600px] bg-[#fff] text-black p-8 font-mono relative flex flex-col items-center drop-shadow-xl"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/white-paper.png")`,
      }}
    >
      {/* Zigzag Top */}
      <div
        className="absolute top-0 left-0 w-full h-4 bg-zinc-100"
        style={{
          background:
            "linear-gradient(135deg, transparent 50%, #fff 50%), linear-gradient(-135deg, transparent 50%, #fff 50%)",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat-x",
        }}
      ></div>

      <div className="text-center w-full mb-6 mt-4 border-b border-dashed border-black pb-4">
        <div className="text-3xl font-bold uppercase tracking-widest mb-2">
          THE AUDACITY
        </div>
        <div className="text-sm">123 Delusion Drive</div>
        <div className="text-sm">Clown Town, CT 06969</div>
        <div className="text-sm mt-2">TEL: 1-800-GET-REAL</div>
      </div>

      <div className="w-full flex justify-between text-sm mb-2">
        <span>DATE: {date}</span>
        <span>TIME: {time}</span>
      </div>
      <div className="w-full flex justify-between text-sm mb-6 border-b border-dashed border-black pb-4">
        <span>SERVER: {data.user.handle}</span>
        <span>TABLE: 1</span>
      </div>

      <div className="w-full flex justify-between font-bold border-b border-black pb-2 mb-4">
        <span>ITEM</span>
        <span>QTY</span>
        <span>PRICE</span>
      </div>

      <div className="w-full text-lg leading-relaxed mb-6 border-b border-dashed border-black pb-6">
        {/* Simulate items from content */}
        <div className="flex justify-between mb-2 font-bold">
          <span>BAD_TAKE_01</span>
          <span>1</span>
          <span>$99.99</span>
        </div>

        <div className="prose prose-zinc max-w-none break-words w-full font-mono text-sm uppercase my-4 pl-4">
          <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
        </div>

        <div className="flex justify-between text-zinc-500 italic">
          <span> - extra salt</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between text-zinc-500 italic">
          <span> - zero logic</span>
          <span>$0.00</span>
        </div>
      </div>

      <div className="w-full space-y-2 mb-8">
        <div className="flex justify-between font-bold text-xl">
          <span>TOTAL</span>
          <span>$ PRICELESS</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>CASH</span>
          <span>$ 0.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>CHANGE</span>
          <span>$ 0.00</span>
        </div>
      </div>

      <div className="text-center text-sm mb-8 w-full">
        <p className="font-bold mb-2">*** CUSTOMER COPY ***</p>
        <p>NO REFUNDS ON OPINIONS.</p>
        <p>THANK YOU FOR VISITING THE CIRCUS.</p>
      </div>

      <div className="mt-auto w-full flex flex-col items-center">
        <Barcode className="w-full h-16 scale-y-150" />
        <div className="text-xs mt-2">
          {data.user.name} - {data.user.handle}
        </div>
      </div>

      {/* Zigzag Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-4 bg-zinc-100 rotate-180"
        style={{
          background:
            "linear-gradient(135deg, transparent 50%, #fff 50%), linear-gradient(-135deg, transparent 50%, #fff 50%)",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat-x",
        }}
      ></div>
    </div>
  );
};
