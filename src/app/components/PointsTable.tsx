import React from 'react';

export interface TeamStats {
  id: number;
  team: string;
  played: number;
  won: number;
  lost: number;
  points: number;
  nrr: string;
  form: ('W' | 'L')[]; // Last 5 matches
}

export const pointsTable: TeamStats[] = [
  {
    id: 1,
    team: 'Chennai Super Kings',
    played: 10,
    won: 7,
    lost: 3,
    points: 14,
    nrr: '+0.642',
    form: ['W', 'W', 'L', 'W', 'W'],
  },
  {
    id: 2,
    team: 'Mumbai Indians',
    played: 10,
    won: 6,
    lost: 4,
    points: 12,
    nrr: '+0.210',
    form: ['L', 'W', 'W', 'L', 'W'],
  },
  {
    id: 3,
    team: 'Royal Challengers Bangalore',
    played: 10,
    won: 5,
    lost: 5,
    points: 10,
    nrr: '-0.010',
    form: ['W', 'L', 'L', 'W', 'L'],
  },
  {
    id: 4,
    team: 'Kolkata Knight Riders',
    played: 10,
    won: 4,
    lost: 6,
    points: 8,
    nrr: '-0.152',
    form: ['L', 'L', 'W', 'L', 'L'],
  },
  {
    id: 5,
    team: 'Delhi Capitals',
    played: 10,
    won: 4,
    lost: 6,
    points: 8,
    nrr: '-0.240',
    form: ['W', 'L', 'L', 'W', 'L'],
  },
  {
    id: 6,
    team: 'Sunrisers Hyderabad',
    played: 10,
    won: 3,
    lost: 7,
    points: 6,
    nrr: '-0.560',
    form: ['L', 'L', 'L', 'W', 'L'],
  },
];

const PointsTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold text-left bg-gray-100">Team</th>
            <th className="px-4 py-2 font-bold text-center bg-gray-100">Played</th>
            <th className="px-4 py-2 font-bold text-center bg-gray-100">Won</th>
            <th className="px-4 py-2 font-bold text-center bg-gray-100">Lost</th>
            <th className="px-4 py-2 font-bold text-center bg-gray-100">Points</th>
            <th className="px-4 py-2 font-bold text-center bg-gray-100">NRR</th>
            <th className="px-4 py-2 font-bold text-center bg-gray-100">Form</th>
          </tr>
        </thead>
        <tbody>
          {pointsTable.map((team, idx) => (
            <tr key={team.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">{team.team}</td>
              <td className="px-4 py-2 text-center">{team.played}</td>
              <td className="px-4 py-2 text-center">{team.won}</td>
              <td className="px-4 py-2 text-center">{team.lost}</td>
              <td className="px-4 py-2 text-center font-semibold">{team.points}</td>
              <td className="px-4 py-2 text-center">{team.nrr}</td>
              <td className="px-4 py-2 text-center">
                <div className="flex justify-center gap-1">
                  {team.form.map((result, i) =>
                    result === 'W' ? (
                      <span
                        key={i}
                        className="inline-block w-5 h-5 text-green-600"
                        title="Win"
                        aria-label="Win"
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M16.707 6.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0l-3.182-3.182a1 1 0 111.414-1.414l2.475 2.475 5.657-5.657a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </span>
                    ) : (
                      <span
                        key={i}
                        className="inline-block w-5 h-5 text-red-500"
                        title="Loss"
                        aria-label="Loss"
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10 8.586l3.536-3.535a1 1 0 111.415 1.415L11.414 10l3.537 3.535a1 1 0 01-1.415 1.415L10 11.414l-3.535 3.536a1 1 0 01-1.415-1.415L8.586 10 5.05 6.464a1 1 0 011.415-1.415L10 8.586z" clipRule="evenodd" /></svg>
                      </span>
                    )
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable; 