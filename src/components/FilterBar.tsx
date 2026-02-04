interface FilterBarProps {
  sortBy: 'viewers' | 'followers';
  setSortBy: (sort: 'viewers' | 'followers') => void;
  liveOnly: boolean;
  setLiveOnly: (live: boolean) => void;
  streamerCount: number;
}

export default function FilterBar({ sortBy, setSortBy, liveOnly, setLiveOnly, streamerCount }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-sm font-mono tracking-wide">SORT BY:</span>

        <button
          onClick={() => setSortBy('viewers')}
          className={`px-4 py-1.5 text-sm font-mono tracking-wide transition-all duration-200 ${
            sortBy === 'viewers'
              ? 'bg-pink-500 text-white'
              : 'text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-white'
          }`}
        >
          MOST VIEWED
        </button>

        <button
          onClick={() => setSortBy('followers')}
          className={`px-4 py-1.5 text-sm font-mono tracking-wide transition-all duration-200 ${
            sortBy === 'followers'
              ? 'bg-pink-500 text-white'
              : 'text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-white'
          }`}
        >
          MOST FOLLOWED
        </button>

        <button
          onClick={() => setLiveOnly(!liveOnly)}
          className={`px-4 py-1.5 text-sm font-mono tracking-wide transition-all duration-200 flex items-center gap-2 ${
            liveOnly
              ? 'border-2 border-red-500 text-red-400'
              : 'text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-white'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${liveOnly ? 'bg-red-500 animate-pulse' : 'bg-gray-600'}`} />
          LIVE ONLY
        </button>
      </div>

      <div className="text-gray-500 text-sm font-mono">
        <span className="text-cyan-400">{streamerCount}</span> streamers
      </div>
    </div>
  );
}
