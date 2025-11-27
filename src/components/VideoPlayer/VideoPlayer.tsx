import { useRef } from "react";

interface VideoPlayerProps {
  src: string;
  start?: number;
  end?: number;
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  controls: boolean;
  className: string;
}

export default function VideoPlayer({ src, start = 0, end, autoPlay = false, loop = false, muted = false, controls = true, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (!videoRef.current || end == undefined) return;

    console.log(end);

    if (videoRef.current.currentTime >= end) {
      videoRef.current.currentTime = start;
    }
  };


  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = start;
    }
  };

  return (

    <video ref={videoRef} src={src} autoPlay={autoPlay} loop={loop} muted={muted} controls={controls} className={className} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />
  )
}
