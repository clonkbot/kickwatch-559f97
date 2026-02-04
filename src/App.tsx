import { useState, useEffect } from 'react';
import StreamerCard from './components/StreamerCard';
import Header from './components/Header';
import FilterBar from './components/FilterBar';

export interface Streamer {
  id: number;
  username: string;
  displayName: string;
  category: string;
  viewers: number;
  followers: number;
  isLive: boolean;
  avatarColor: string;
}

const mockStreamers: Streamer[] = [
  { id: 1, username: 'xQc', displayName: 'xQc', category: 'JUST CHATTING', viewers: 85000, followers: 2500000, isLive: true, avatarColor: '#00CED1' },
  { id: 2, username: 'Trainwreckstv', displayName: 'Trainwreckstv', category: 'SLOTS', viewers: 42000, followers: 1200000, isLive: true, avatarColor: '#00CED1' },
  { id: 3, username: 'AdinRoss', displayName: 'Adin Ross', category: 'JUST CHATTING', viewers: 38000, followers: 980000, isLive: true, avatarColor: '#00CED1' },
  { id: 4, username: 'Nickmercs', displayName: 'NICKMERCS', category: 'CALL OF DUTY', viewers: 28000, followers: 750000, isLive: true, avatarColor: '#00CED1' },
  { id: 5, username: 'Amouranth', displayName: 'Amouranth', category: 'JUST CHATTING', viewers: 22000, followers: 620000, isLive: true, avatarColor: '#00CED1' },
  { id: 6, username: 'Clix', displayName: 'Clix', category: 'FORTNITE', viewers: 18500, followers: 540000, isLive: true, avatarColor: '#00CED1' },
  { id: 7, username: 'Destiny', displayName: 'Destiny', category: 'JUST CHATTING', viewers: 15000, followers: 480000, isLive: false, avatarColor: '#00CED1' },
  { id: 8, username: 'Sketch', displayName: 'Sketch', category: 'JUST CHATTING', viewers: 35000, followers: 890000, isLive: true, avatarColor: '#00CED1' },
  { id: 9, username: 'StableRonaldo', displayName: 'Stable Ronaldo', category: 'FORTNITE', viewers: 12000, followers: 320000, isLive: true, avatarColor: '#00CED1' },
  { id: 10, username: 'Jynxzi', displayName: 'Jynxzi', category: 'RAINBOW SIX', viewers: 25000, followers: 680000, isLive: true, avatarColor: '#00CED1' },
  { id: 11, username: 'IShowSpeed', displayName: 'IShowSpeed', category: 'JUST CHATTING', viewers: 0, followers: 1800000, isLive: false, avatarColor: '#00CED1' },
  { id: 12, username: 'Kai', displayName: 'Kai Cenat', category: 'JUST CHATTING', viewers: 0, followers: 950000, isLive: false, avatarColor: '#00CED1' },
];

type SortType = 'viewers' | 'followers';

function App() {
  const [sortBy, setSortBy] = useState<SortType>('viewers');
  const [liveOnly, setLiveOnly] = useState(false);
  const [streamers, setStreamers] = useState<Streamer[]>([]);
  const [activeTab, setActiveTab] = useState<'browse' | 'leaderboard'>('browse');

  useEffect(() => {
    let filtered = [...mockStreamers];

    if (liveOnly) {
      filtered = filtered.filter(s => s.isLive);
    }

    filtered.sort((a, b) => {
      if (sortBy === 'viewers') {
        return b.viewers - a.viewers;
      }
      return b.followers - a.followers;
    });

    setStreamers(filtered);
  }, [sortBy, liveOnly]);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const liveCount = mockStreamers.filter(s => s.isLive).length;

  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
           }}
      />

      {/* Gradient glow effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <FilterBar
            sortBy={sortBy}
            setSortBy={setSortBy}
            liveOnly={liveOnly}
            setLiveOnly={setLiveOnly}
            streamerCount={liveOnly ? liveCount : mockStreamers.length}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {streamers.map((streamer, index) => (
              <StreamerCard
                key={streamer.id}
                streamer={streamer}
                formatNumber={formatNumber}
                index={index}
              />
            ))}
          </div>

          {streamers.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 font-mono">No streamers found</p>
            </div>
          )}
        </main>

        <footer className="py-8 text-center">
          <p className="text-gray-600 text-xs font-mono tracking-wide">
            Requested by <span className="text-gray-500">@sweg69cards</span> · Built by <span className="text-gray-500">@clonkbot</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
