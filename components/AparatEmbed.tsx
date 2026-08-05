"use client";

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
        className="text-sm font-medium text-brand-700 underline-offset-2 hover:underline"
      >
        {title}
      </a>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-brand-100 bg-ink-900/5 shadow-sm">
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
          className="group absolute inset-0 flex w-full cursor-pointer items-center justify-center bg-gradient-to-br from-brand-100/80 via-white to-brand-50 transition hover:from-brand-200/70"
          aria-label={playLabel}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink-900 text-white shadow-glow transition group-hover:scale-105 group-hover:bg-brand-700 group-hover:shadow-glow-strong">
            <Play className="h-7 w-7 fill-current ltr:ml-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}
