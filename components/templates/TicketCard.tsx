import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Barcode, Ticket as TicketIcon } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const TicketCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[300px] bg-[#f0f0f0] p-0 flex drop-shadow-2xl relative"
    >
      {/* Left Stub (Main Content) */}
      <div className="flex-1 bg-white border-2 border-black border-dashed border-r-0 rounded-l-xl p-6 relative overflow-hidden flex flex-col justify-between">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0"></div>

        <div className="relative z-10 flex justify-between items-start mb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">
              Event
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-black leading-none">
              The Circus
            </h1>
            <div className="text-sm font-bold text-red-600 uppercase">
              Admit One • No Refunds
            </div>
          </div>
          <div className="w-16 h-16 rounded overflow-hidden border-2 border-black bg-zinc-200">
            <img
              src={data.user.avatarUrl}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        <div className="relative z-10 border-t-2 border-black border-dashed py-4 my-2">
          <div className="text-sm font-medium leading-snug prose prose-p:my-0 max-w-none break-words w-full font-mono uppercase bg-yellow-100 p-2 border border-black transform -rotate-1 shadow-sm">
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-end mt-auto text-xs font-mono">
          <div>
            <span className="block text-zinc-400 uppercase">Date</span>
            <span className="font-bold">{new Date().toLocaleDateString()}</span>
          </div>
          <div>
            <span className="block text-zinc-400 uppercase">Seat</span>
            <span className="font-bold">ROW L • SEAT 0</span>
          </div>
          <div>
            <span className="block text-zinc-400 uppercase">Price</span>
            <span className="font-bold">$0.00</span>
          </div>
        </div>
      </div>

      {/* Perforation Line */}
      <div className="w-[2px] bg-white relative z-20 flex flex-col justify-between items-center overflow-hidden">
        <div className="absolute inset-y-0 -left-1 border-r-2 border-black border-dashed h-full"></div>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-[#f0f0f0] rounded-full -ml-[8px] mb-6 border-r-2 border-black"
          ></div>
        ))}
      </div>

      {/* Right Stub (Barcode) */}
      <div className="w-[160px] bg-yellow-400 border-2 border-black border-l-0 rounded-r-xl p-4 flex flex-col items-center justify-center relative shadow-inner">
        <div className="absolute -left-2 top-0 bottom-0 w-4 bg-transparent z-30">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-[#f0f0f0] rounded-full absolute -left-2"
              style={{ top: `${i * 38}px` }}
            ></div>
          ))}
        </div>

        <div className="transform rotate-90 text-center whitespace-nowrap">
          <h2 className="text-2xl font-black uppercase tracking-widest text-black mb-2 opacity-50">
            ADMIT ONE
          </h2>
          <div className="flex justify-center my-4 opacity-80 mix-blend-multiply">
            <Barcode size={64} />
          </div>
          <div className="font-mono text-xs font-bold tracking-[0.2em]">
            1234-5678-90
          </div>
        </div>
      </div>
    </div>
  );
};
