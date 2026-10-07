import { useState } from "react";
import { Play } from "lucide-react";

function aparatHash(url: string): string | null {
  const match = url.match(/aparat\.com\/v\/([A-Za-z0-9]+)/i);
  return match?.[1] ?? null;
}

function embedSrc(hash: string): string {
  return `https://www.aparat.com/video/video/embed/videohash/${hash}/vt/frame`;
}

type AparatEmbedProps = {
  url: string;
  title: string;
  playLabel: string;
};

export function AparatEmbed({ url, title, playLabel }: AparatEmbedProps) {
  const hash = aparatHash(url);
  const [playing, setPlaying] = useState(false);

  if (!hash) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-ink-900 underline underline-offset-4 hover:text-brand-600"
      >
        {title}
      </a>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden bg-ink-900/5">
      {playing ? (
        <iframe
          src={`${embedSrc(hash)}?autoplay=true`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex w-full cursor-pointer items-center justify-center"
          aria-label={playLabel}
        >
          <span className="flex h-14 w-14 items-center justify-center bg-ink-900 text-white transition group-hover:bg-brand-600">
            <Play className="h-6 w-6 fill-current ltr:ml-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}
