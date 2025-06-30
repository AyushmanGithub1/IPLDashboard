import React from 'react';

interface MatchCardProps {
  matchNumber: number;
  teams: string;
  date: string;
  venue: string;
  status: string;
  teamLogos: [string, string];
  firstInningsScore?: string;
  team1Score?: string;
  team2Score?: string;
  matchSituation?: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ matchNumber, teams, date, venue, status, teamLogos, firstInningsScore, team1Score, team2Score, matchSituation }) => {
  const [team1, team2] = teams.split(' vs ');
  const statusColor = status === 'live' ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-blue-100 text-blue-800';
  const isLive = status === 'live';
  return (
    <div className="w-full max-w-xl mx-auto rounded-xl shadow-md border border-gray-100 bg-white hover:bg-blue-50 transition-colors p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-blue-800">Match #{matchNumber}</span>
        <span className={`inline-block px-3 py-1 rounded-full font-semibold text-xs ${statusColor} uppercase tracking-wide`}>{isLive ? 'LIVE' : 'Upcoming'}</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <img src={teamLogos[0]} alt={team1} className="w-10 h-10 object-contain rounded" />
          <span className="font-semibold text-gray-800 text-base truncate">{team1}</span>
        </div>
        <span className="text-gray-400 font-bold text-lg">vs</span>
        <div className="flex items-center gap-2 min-w-0">
          <img src={teamLogos[1]} alt={team2} className="w-10 h-10 object-contain rounded" />
          <span className="font-semibold text-gray-800 text-base truncate">{team2}</span>
        </div>
      </div>
      {isLive ? (
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex items-center justify-between w-full">
            <span className="font-bold text-lg text-gray-900">{team1Score}</span>
            <span className="font-bold text-lg text-gray-900">{team2Score}</span>
          </div>
          {matchSituation && (
            <div className="text-sm text-gray-700 font-medium text-center mt-1">{matchSituation}</div>
          )}
        </div>
      ) : (
        <>
          {firstInningsScore && (
            <div className="flex justify-center mt-2">
              <span className="inline-block px-3 py-1 rounded bg-green-100 text-green-800 font-semibold text-xs">{firstInningsScore}</span>
            </div>
          )}
        </>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-1 mt-2">
        {!isLive && <span>{date}</span>}
        {!isLive && <span className="hidden sm:inline">|</span>}
        <span className="text-center">{venue}</span>
      </div>
    </div>
  );
};

export default MatchCard; 