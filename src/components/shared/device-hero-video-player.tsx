"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DeviceHeroVideoBanner } from "@/components/shared/device-hero-video-banner";

const HERO_VIDEO_SRC = process.env.NEXT_PUBLIC_HERO_VIDEO_SRC?.trim();

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "00:00";
  const mins = Math.floor(value / 60);
  const secs = Math.floor(value % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function DeviceHeroVideoPlayer() {
  const heroVideoSrc = HERO_VIDEO_SRC;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const hasConfiguredVideo = Boolean(heroVideoSrc);

  useEffect(() => {
    let ignore = false;

    if (!hasConfiguredVideo || !heroVideoSrc) {
      setVideoAvailable(false);
      return;
    }

    async function checkVideo() {
      const src = heroVideoSrc;
      if (!src) {
        if (!ignore) {
          setVideoAvailable(false);
        }
        return;
      }

      try {
        const response = await fetch(src, { method: "HEAD" });
        const contentType = response.headers.get("content-type") ?? "";
        if (!ignore) {
          setVideoAvailable(response.ok && contentType.includes("video"));
        }
      } catch {
        if (!ignore) {
          setVideoAvailable(false);
        }
      }
    }

    void checkVideo();

    return () => {
      ignore = true;
    };
  }, [hasConfiguredVideo, heroVideoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoAvailable) return;

    video.muted = muted;

    if (playing) {
      void video.play().catch(() => {
        setPlaying(false);
      });
    } else {
      video.pause();
    }
  }, [playing, muted, videoAvailable]);

  if (!videoAvailable || !heroVideoSrc) {
    return <DeviceHeroVideoBanner />;
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 }}
      className="overflow-hidden rounded-[2rem] border border-white/45 bg-slate-950 shadow-2xl"
      aria-label="Hero video showing how device works for children"
    >
      <div className="relative h-[420px] w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          muted
          preload="metadata"
          poster="/videos/hero-poster.svg"
          onError={() => setVideoAvailable(false)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

        <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-white/25 text-white">Hero Video</Badge>
            <Badge className="bg-teal-500/20 text-teal-100">How Device Works</Badge>
          </div>
          <p className="text-xs text-slate-100">Child-facing interaction demo</p>
        </div>

        <div className="absolute inset-x-5 bottom-5 z-10 rounded-2xl border border-white/20 bg-slate-950/55 p-3 backdrop-blur-md">
          <div className="mb-2 flex items-center justify-between gap-3 text-xs text-slate-200">
            <p>Voice flow: Wake Word → Lesson → Questions → Parent Sync</p>
            <p>{formatTime(currentTime)} / {formatTime(duration)}</p>
          </div>

          <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-teal-400" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="secondary" className="border-0 bg-white/20 text-white hover:bg-white/30" onClick={() => setPlaying((state) => !state)}>
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button size="sm" variant="secondary" className="border-0 bg-white/20 text-white hover:bg-white/30" onClick={() => setMuted((state) => !state)}>
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <p className="ml-1 text-xs text-slate-200">If no MP4 is found, animated demo fallback is shown automatically.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
