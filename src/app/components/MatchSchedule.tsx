import React from 'react';

export interface MatchScheduleEntry {
  id: number;
  date: string;
  time: string;
  timeGMT: string;
  teams: string;
  venue: string;
  teamLogos: [string, string];
}

export const matchSchedule: MatchScheduleEntry[] = [
  {
    id: 1,
    date: "Sat, 28 Jun '25",
    time: '19:30',
    timeGMT: '14:00',
    teams: 'Mumbai Indians vs Chennai Super Kings',
    venue: 'Wankhede Stadium',
    teamLogos: ['/mi.jpg', '/csk.jpg'],
  },
  {
    id: 2,
    date: "Sat, 29 Jun '25",
    time: '19:30',
    timeGMT: '14:00',
    teams: 'Royal Challengers Bangalore vs Kolkata Knight Riders',
    venue: 'M. Chinnaswamy Stadium',
    teamLogos: ['/rcb.jpg', '/kkr.jpg'],
  },
  {
    id: 3,
    date: "Sat, 30 Jun '25",
    time: '19:30',
    timeGMT: '14:00',
    teams: 'Delhi Capitals vs Sunrisers Hyderabad',
    venue: 'Arun Jaitley Stadium',
    teamLogos: ['/dc.jpg', '/srh.jpg'],
  },
  {
    id: 4,
    date: "Sun, 31 Jun '25",
    time: '19:30',
    timeGMT: '14:00',
    teams: 'Rajasthan Royals vs Punjab Kings',
    venue: 'Sawai Mansingh Stadium',
    teamLogos: ['/rr.jpg', '/pbks.jpg'],
  },
];

const MatchSchedule = () => {
  return (
    <div className="flex flex-col gap-6 my-6 w-full">
      {matchSchedule.map((match) => {
        const [team1, team2] = match.teams.split(' vs ');
        return (
          <div
            key={match.id}
            tabIndex={0}
            className="flex flex-col sm:flex-row w-full items-stretch rounded-xl shadow-md border border-gray-100 bg-white hover:bg-blue-50 focus:bg-blue-100 transition-colors outline-none"
          >
            <div className="flex flex-col items-start sm:w-[10%] min-w-[60px] px-2 py-4">
              <span className="font-bold text-xs text-blue-800">{match.date}</span>
            </div>

            <div className="flex flex-col justify-center sm:w-[70%] px-2 py-2 gap-1">
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-700">
                <span className='text-gray-400'>Match #{match.id}</span>
                <span className="hidden sm:inline text-gray-400">|</span>
                <span className="truncate text-gray-400">{match.venue}</span>
              </div>
              <div className="flex flex-col gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <img src={match.teamLogos[0]} alt={team1} className="w-7 h-7 object-contain rounded" />
                  <span className="font-semibold text-gray-800 text-md">{team1}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={match.teamLogos[1]} alt={team2} className="w-7 h-7 object-contain rounded" />
                  <span className="font-semibold text-gray-800 text-md">{team2}</span>
                </div>
              </div>
              <div className="mt-1 text-xs text-orange-600 font-medium">Match yet to begin</div>
            </div>

            <div className="flex flex-col justify-center items-end sm:w-[20%] min-w-[80px] px-2 py-4">
              <span className="text-blue-700 font-bold text-lg leading-tight">{match.time} PM</span>
              <span className="text-xs text-gray-500">{match.timeGMT} GMT</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchSchedule; 