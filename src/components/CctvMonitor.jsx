import { useState, useEffect } from 'react';
import { Camera, Eye, Power } from 'lucide-react';

export default function CctvMonitor() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [timestamp, setTimestamp] = useState(new Date());
  const [showScanlines, setShowScanlines] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Sleek Bezel Wrap */}
      <div className="glass-panel p-2 bg-[#0B192C] border-slate-800 shadow-premium rounded-2xl relative overflow-hidden">
        
        {/* Animated small bullet camera on top of the bezel frame */}
        <div className="absolute top-2.5 right-6 z-30 flex items-center gap-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-900 font-mono text-[9px] text-slate-300">
          {/* A miniature panning camera icon */}
          <div className="animate-bullet-pan origin-[4px_6px] inline-block">
            <Camera className="w-3.5 h-3.5 text-security-gold" />
          </div>
          <span>REC_NODE://CAM_01</span>
        </div>

        {/* Live feed monitor box */}
        <div className="bg-[#02050f] rounded-xl overflow-hidden relative aspect-video border border-slate-950 flex items-center justify-center">
          
          {/* Black screen state when turned off */}
          {!isPlaying ? (
            <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center gap-2 z-20">
              <Power className="w-8 h-8 text-red-500 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">CAMERA FEED DISCONNECTED</span>
            </div>
          ) : (
            <>
              {/* Vignette glass shading overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.75)_100%)] z-10 pointer-events-none" />
              
              {/* Scanline CRT overlay */}
              {showScanlines && (
                <div className="absolute inset-0 crt-overlay opacity-30 pointer-events-none z-10" />
              )}

              {/* Red blinking Recording indicator */}
              <div className="absolute top-3.5 left-4 z-20 flex items-center gap-2 bg-slate-950/70 py-1 px-2 rounded-lg border border-slate-900">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-led-blink-fast shadow-[0_0_8px_#EF4444]" />
                <span className="text-[9px] font-mono tracking-widest text-slate-200 uppercase font-extrabold">LIVE CAM_01</span>
              </div>

              {/* Running Timestamp overlay */}
              <div className="absolute bottom-3.5 left-4 z-20 text-[9px] font-mono text-slate-350 bg-slate-950/70 py-1 px-2 rounded border border-slate-900/60">
                TIME: {timestamp.toLocaleDateString()} {timestamp.toLocaleTimeString()}
              </div>

              {/* Secure STQC indicator */}
              <div className="absolute bottom-3.5 right-4 z-20 text-[8px] font-mono text-emerald-400 bg-slate-950/70 py-1 px-2 rounded border border-slate-900/60 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>STQC SECURED</span>
              </div>

              {/* Surveillance Video Feed */}
              <video
                src="/cctv-demo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full absolute inset-0 object-cover"
              />
            </>
          )}
        </div>
      </div>

      {/* Basic controls beneath the screen */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono px-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1 rounded border text-[9px] font-bold uppercase transition-all duration-200 cursor-pointer ${
              isPlaying
                ? 'border-red-900 hover:border-red-600 bg-red-950/30 text-red-400'
                : 'border-emerald-900 hover:border-emerald-600 bg-emerald-950/30 text-emerald-400'
            }`}
          >
            {isPlaying ? 'Disconnect Feed' : 'Connect Feed'}
          </button>

          <button
            onClick={() => setShowScanlines(!showScanlines)}
            className={`px-3 py-1 rounded border text-[9px] font-bold uppercase transition-all duration-200 cursor-pointer ${
              showScanlines
                ? 'border-security-gold bg-security-gold/10 text-security-gold'
                : 'border-slate-800 bg-slate-950/50 text-slate-400'
            }`}
          >
            CRT Grid: {showScanlines ? 'ON' : 'OFF'}
          </button>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>RESOLUTION: 1080P FHD</span>
        </div>
      </div>
    </div>
  );
}
