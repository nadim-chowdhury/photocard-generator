import PhotocardGenerator from "@/components/PhotocardGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-4 py-8 md:p-12">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Viral Photocard
            <br />
            Generator
          </h1>
          <p className="text-zinc-500 max-w-lg mx-auto text-lg">
            Create high-engagement, meme-worthy posts for social media in
            seconds.
          </p>
        </header>

        <PhotocardGenerator />
      </div>
    </main>
  );
}
