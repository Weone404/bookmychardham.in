'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Video as VideoIcon, Link, Check, ExternalLink } from 'lucide-react';

export const BackgroundVideo = ({
  initialVideoUrl = 'https://console.cloudinary.com/app/c-01761eb9eda93aa675327b3650493b/assets/media_library/asset/9667cb3da5508ae4ca18bc6cfb2c1805/video',
  posterUrl = '/airplane-sunset-bg.jpg',
  onVideoLoaded,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(initialVideoUrl);
  const [activeSrc, setActiveSrc] = useState('');
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState(initialVideoUrl);
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef(null);

  // Formatter to convert Cloudinary Console URL or other URLs to direct stream URLs if possible
  const resolveStreamUrl = (url) => {
    if (!url) return '';
    const trimmed = url.trim();

    // If already direct video format
    if (trimmed.endsWith('.mp4') || trimmed.endsWith('.webm') || trimmed.endsWith('.mov') || trimmed.startsWith('blob:')) {
      return trimmed;
    }

    // If Cloudinary console URL: extract asset ID or cloud name
    if (trimmed.includes('cloudinary.com')) {
      const match = trimmed.match(/asset\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        const assetId = match[1];
        return `https://res.cloudinary.com/demo/video/upload/${assetId}.mp4`;
      }
    }

    return trimmed;
  };

  useEffect(() => {
    const resolved = resolveStreamUrl(currentUrl);
    setActiveSrc(resolved);
  }, [currentUrl]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [activeSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setCurrentUrl(blobUrl);
      setActiveSrc(blobUrl);
      setHasError(false);
      setIsPlaying(true);
      setIsUrlModalOpen(false);
    }
  };

  const handleApplyUrl = (e) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setCurrentUrl(inputUrl.trim());
      setHasError(false);
      setIsUrlModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* 1. Background Video Layer - Loop, Muted, AutoPlay, Full Coverage */}
      <video
        ref={videoRef}
        key={activeSrc}
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        onError={() => setHasError(true)}
        onLoadedData={() => {
          setHasError(false);
          onVideoLoaded?.();
        }}
        className="absolute inset-0 w-full h-full object-cover object-center scale-100"
      >
        {activeSrc && <source src={activeSrc} type="video/mp4" />}
        {activeSrc && <source src={activeSrc} type="video/webm" />}
      </video>

      {/* 2. Fallback High-Resolution Layer ONLY if video stream cannot be loaded */}
      {hasError && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${posterUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
      )}

      {/* 3. Floating Control Bar */}
      <div className="absolute bottom-5 right-6 z-30 pointer-events-auto flex items-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg text-xs text-neutral-200">
        <button
          onClick={togglePlay}
          className="p-1 hover:text-white transition-colors cursor-pointer"
          title={isPlaying ? 'Pause video' : 'Play video'}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-1 hover:text-white transition-colors cursor-pointer"
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        <div className="w-[1px] h-3 bg-white/20" />

        <button
          onClick={() => setIsUrlModalOpen(true)}
          className="flex items-center gap-1.5 px-2 py-0.5 hover:text-white transition-colors cursor-pointer text-[11px] font-semibold tracking-wider uppercase text-neutral-300"
          title="Video Link / Cloudinary URL"
        >
          <VideoIcon className="w-3 h-3 text-red-500" />
          <span>Video URL</span>
        </button>
      </div>

      {/* 4. Video Source URL / Upload Dialog */}
      {isUrlModalOpen && (
        <div className="fixed inset-0 z-50 pointer-events-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#181818] border border-white/15 rounded-xl max-w-lg w-full p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <VideoIcon className="w-5 h-5 text-red-600" />
                <h3 className="text-base font-bold uppercase tracking-wider">Background Video Source</h3>
              </div>
              <button
                onClick={() => setIsUrlModalOpen(false)}
                className="text-neutral-400 hover:text-white text-lg px-2 py-0.5"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
              Using your Cloudinary video asset. You can paste the direct video URL (e.g. from Cloudinary&apos;s &quot;Copy URL&quot; button ending in <code className="text-red-400">.mp4</code>) or upload a local video file.
            </p>

            <form onSubmit={handleApplyUrl} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-bold text-neutral-400 mb-1.5">
                  Direct Video Link / Cloudinary URL
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Link className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="https://res.cloudinary.com/.../video.mp4"
                      className="w-full bg-black/50 border border-white/20 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 active:scale-95 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Apply
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Upload Video from Computer (.mp4, .webm)
                </button>

                <button
                  type="button"
                  onClick={() => setIsUrlModalOpen(false)}
                  className="text-xs text-neutral-400 hover:text-white px-3 py-2"
                >
                  Close
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/webm,video/ogg,video/quicktime"
                onChange={handleFileUpload}
                className="hidden"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
