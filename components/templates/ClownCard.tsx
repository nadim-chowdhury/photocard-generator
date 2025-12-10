import React from "react";
import { PhotocardTemplateProps } from "@/types";
import { Car, Fingerprint } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const ClownCard: React.FC<PhotocardTemplateProps> = ({ data, id }) => {
  return (
    <div
      id={id}
      className="w-[600px] min-h-[400px] bg-[#fdfbf7] text-black font-sans p-6 rounded-xl border border-zinc-300 relative overflow-hidden"
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/security.png")`,
        backgroundSize: "auto",
      }}
    >
      {/* Header Band */}
      <div className="absolute top-8 left-0 w-full h-12 bg-gradient-to-r from-blue-600 via-white to-red-600 opacity-20 z-0"></div>

      <div className="relative z-10 flex justify-between items-start mb-6 border-b-2 border-red-600 pb-2">
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 bg-cover"
            style={{
              backgroundImage:
                "url('https://em-content.zobj.net/source/microsoft-teams/337/clown-face_1f921.png')",
            }}
          ></div>
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-blue-900">
              Certified Clown
            </h1>
            <div className="text-xs font-bold uppercase tracking-widest text-red-600">
              Department of Bad Takes
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold text-blue-900">ID: 00-CLOWN-00</div>
          <div className="text-xs text-zinc-500">Exp: Never</div>
        </div>
      </div>

      <div className="relative z-10 flex gap-6">
        {/* Photo Area */}
        <div className="w-1/3 flex flex-col gap-2">
          <div className="aspect-[3/4] border-2 border-red-600 bg-white p-1 relative">
            <img
              src={
                data.user.avatarUrl ||
                "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Clown"
              }
              alt={data.user.name}
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full text-center bg-red-600 text-white text-[10px] uppercase font-bold px-1">
              Professional
            </div>
          </div>
          <div className="text-center font-cursive text-xl text-blue-900 opacity-80 border-b border-black w-3/4 mx-auto">
            {data.user.name}
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 space-y-3 text-sm font-bold text-blue-900 uppercase">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] text-zinc-500">Name</div>
              <div className="text-lg">{data.user.handle}</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500">DOB</div>
              <div className="text-lg">Yesterday</div>
            </div>
          </div>

          <div>
            <div className="text-[10px] text-zinc-500">Address</div>
            <div className="text-base">123 Circus Tent, The Internet</div>
          </div>

          <div>
            <div className="text-[10px] text-zinc-500">Occupation</div>
            <div className="text-base">Posting Ls Online</div>
          </div>

          <div className="mt-4 border-2 border-red-100 bg-red-50 p-3 rounded min-h-[100px] normal-case text-zinc-800 font-medium leading-snug relative">
            <div className="absolute -top-3 left-2 bg-white px-2 text-[10px] text-red-600 font-bold border border-red-200">
              RESTRICTIONS / CONDITIONS
            </div>
            <Markdown remarkPlugins={[remarkBreaks]}>{data.content}</Markdown>
          </div>
        </div>
      </div>

      {/* Footer / Barcode */}
      <div className="absolute bottom-4 right-6 w-1/3 h-12 bg-black/10 flex items-center justify-center">
        <div className="w-full h-8 bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px)]"></div>
      </div>
      <div className="absolute bottom-4 left-6 text-[10px] text-zinc-400 font-bold">
        HONK HONK 🤡
      </div>
    </div>
  );
};
