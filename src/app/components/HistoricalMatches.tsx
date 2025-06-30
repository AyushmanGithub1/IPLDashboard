"use client"

import React from 'react';

export interface HistoricalMatch {
  id: number;
  teams: string;
  teamLogos?: [string, string];
  date: string; 
  venue: string;
  result: string;
}

export const historicalMatches: HistoricalMatch[] = [
  {
    id: 1,
    teams: 'Mumbai Indians vs Chennai Super Kings',
    teamLogos: ['/mi.jpg', '/csk.jpg'],
    date: '2023-05-15',
    venue: 'Wankhede Stadium',
    result: 'MI won by 5 wickets',
  },
  {
    id: 2,
    teams: 'Royal Challengers Bangalore vs Kolkata Knight Riders',
    teamLogos: ['/rcb.jpg', '/kkr.jpg'],
    date: '2023-05-12',
    venue: 'M. Chinnaswamy Stadium',
    result: 'KKR won by 3 runs',
  },
  {
    id: 3,
    teams: 'Delhi Capitals vs Sunrisers Hyderabad',
    teamLogos: ['/dc.jpg', '/srh.jpg'],
    date: '2023-04-28',
    venue: 'Arun Jaitley Stadium',
    result: 'SRH won by 2 wickets',
  },
  {
    id: 4,
    teams: 'Rajasthan Royals vs Punjab Kings',
    teamLogos: ['/rr.jpg', '/pbks.jpg'],
    date: '2023-04-10',
    venue: 'Sawai Mansingh Stadium',
    result: 'RR won by 10 runs',
  },
];

const groupByMonthYear = (matches: HistoricalMatch[]) => {
  return matches.reduce((acc, match) => {
    const date = new Date(match.date);
    const key = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(match);
    return acc;
  }, {} as Record<string, HistoricalMatch[]>);
};

const HistoricalMatches = () => {
  const grouped = groupByMonthYear(historicalMatches);

  return (
    <div className="space-y-8 my-6">
      {Object.entries(grouped).map(([monthYear, matches]) => (
        <div key={monthYear}>
          <h3 className="text-lg font-bold text-blue-800 mb-4">{monthYear}</h3>
          <div className="flex flex-col gap-6 w-full">
            {matches.map((match, idx) => {
              const [team1, team2] = match.teams.split(' vs ');
              return (
                <div
                  key={match.id}
                  tabIndex={0}
                  className="flex flex-col sm:flex-row w-full items-stretch rounded-xl shadow-md border border-gray-100 bg-white hover:bg-blue-50 focus:bg-blue-100 transition-colors outline-none"
                >
                  <div className="flex flex-col items-start sm:w-[10%] min-w-[60px] px-2 py-4">
                    <span className="font-bold text-xs text-blue-800">
                      {new Date(match.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center sm:w-[70%] px-2 py-2 gap-1">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className='text-gray-400'>Match #{match.id}</span>
                      <span className="hidden sm:inline text-gray-400">|</span>
                      <span className="truncate text-gray-400">{match.venue}</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <img src={match.teamLogos?.[0] || '/file.svg'} alt={team1} className="w-7 h-7 object-contain rounded" />
                        <span className="font-semibold text-gray-800 text-md">{team1}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img src={match.teamLogos?.[1] || '/file.svg'} alt={team2} className="w-7 h-7 object-contain rounded" />
                        <span className="font-semibold text-gray-800 text-md">{team2}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-end sm:w-[20%] min-w-[120px] px-2 py-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 font-semibold text-xs text-center">
                      {match.result}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoricalMatches;
