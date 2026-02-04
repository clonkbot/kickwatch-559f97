import type { Streamer } from '../App';

interface StreamerCardProps {
  streamer: Streamer;
  formatNumber: (num: number) => string;
  index: number;
}

export default function StreamerCard({ streamer, formatNumber, index }: StreamerCardProps) {
  const animationDelay = `${index * 50}ms`;

  return (
    <div
      className="group relative bg-[#141418] border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden animate-fadeIn"
      style={{
        animationDelay,
        animationFillMode: 'backwards'
      }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Live badge */}
      {streamer.isLive && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-400 text-xs font-mono font-semibold tracking-wider">LIVE</span>
        </div>
      )}

      {/* Avatar area */}
      <div className="relative h-48 flex items-center justify-center bg-gradient-to-b from-[#1a1a1f] to-[#141418]">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,206,209,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,206,209,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Avatar letter */}
        <span
          className="text-7xl font-mono font-bold text-cyan-400 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
        >
          {streamer.displayName.charAt(0).toUpperCase()}
        </span>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gray-700 group-hover:border-cyan-500/50 transition-colors duration-300" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gray-700 group-hover:border-cyan-500/50 transition-colors duration-300" />
      </div>

      {/* Info section */}
      <div className="p-4 relative z-10">
        <h3 className="text-white font-semibold text-lg tracking-wide group-hover:text-cyan-400 transition-colors duration-200">
          {streamer.displayName}
        </h3>
        <p className="text-gray-500 text-xs font-mono tracking-wider mt-1 uppercase">
          {streamer.category}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-800/50">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span className={`font-mono text-sm ${streamer.isLive ? 'text-pink-400' : 'text-gray-600'}`}>
              {streamer.isLive ? formatNumber(streamer.viewers) : '-'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="text-gray-400 font-mono text-sm">
              {formatNumber(streamer.followers)}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
