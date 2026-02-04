interface HeaderProps {
  activeTab: 'browse' | 'leaderboard';
  setActiveTab: (tab: 'browse' | 'leaderboard') => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="border-b border-gray-800/50 bg-[#0d0d0f]/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-cyan-400 flex items-center justify-center">
              <span className="text-cyan-400 font-bold text-lg font-mono">K</span>
            </div>
            <div>
              <h1 className="text-xl tracking-[0.3em] font-bold">
                <span className="text-cyan-400">KICK</span>
                <span className="text-white">WATCH</span>
              </h1>
              <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase -mt-1">Streamer Directory</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-6 py-2 font-mono text-sm tracking-wider transition-all duration-200 ${
                activeTab === 'browse'
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
              }`}
            >
              Browse
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-6 py-2 font-mono text-sm tracking-wider transition-all duration-200 ${
                activeTab === 'leaderboard'
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
              }`}
            >
              Leaderboard
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
