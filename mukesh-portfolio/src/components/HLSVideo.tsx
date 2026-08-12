import { useHLSVideo } from "../hooks/useHLSVideo";

interface HLSVideoProps {
  src: string;
  className?: string;
}

/**
 * Reusable cinematic background video component backed by hls.js.
 */
function HLSVideo({ src, className = "" }: HLSVideoProps) {
  const videoRef = useHLSVideo(src);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={
        "absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 " +
        className
      }
    />
  );
}

export default HLSVideo;
