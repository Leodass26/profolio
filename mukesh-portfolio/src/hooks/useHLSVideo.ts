import { useEffect, useRef } from "react";
import Hls from "hls.js";

/**
 * Attaches an HLS (.m3u8) stream to a <video> element.
 * Uses hls.js where MSE is supported, falls back to native HLS
 * (Safari/iOS) otherwise. Cleans up the Hls instance on unmount
 * or when the source changes, to avoid memory leaks.
 */
export function useHLSVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
        hls = null;
      }
    };
  }, [src]);

  return videoRef;
}
