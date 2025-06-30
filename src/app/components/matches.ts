export interface Match {
  id: number;
  matchNumber: number;
  teams: string;
  teamLogos: [string, string];
  date: string;
  venue: string;
  status: 'live' | 'upcoming';
  firstInningsScore?: string;
  team1Score?: string;
  team2Score?: string;
  matchSituation?: string;
}

export const matches: Match[] = [
  {
    id: 1,
    matchNumber: 1,
    teams: 'Mumbai Indians vs Chennai Super Kings',
    date: '2024-07-01 19:30',
    venue: 'Wankhede Stadium',
    teamLogos: [
      '/mi.jpg',
      '/csk.jpg'
    ],
    status: 'live',
    firstInningsScore: 'MI 178/6 (20)',
    team1Score: 'MI 178/6 (20)',
    team2Score: 'CSK 24/0 (3.4/20 ov)',
    matchSituation: 'CSK need 155 runs in 98 balls.',
  },
  {
    id: 2,
    matchNumber: 2,
    teams: 'Royal Challengers Bangalore vs Kolkata Knight Riders',
    date: '2024-07-02 19:30',
    venue: 'M. Chinnaswamy Stadium',
    teamLogos: [
      '/rcb.jpg',
      '/kkr.jpg'
    ],
    status: 'live',
    firstInningsScore: 'RCB 201/4 (20)',
    team1Score: 'RCB 201/4 (20)',
    team2Score: 'KKR 50/1 (6.2/20 ov)',
    matchSituation: 'KKR need 152 runs in 82 balls.',
  },
  {
    id: 3,
    matchNumber: 3,
    teams: 'Delhi Capitals vs Sunrisers Hyderabad',
    date: '2024-07-03 19:30',
    venue: 'Arun Jaitley Stadium',
    teamLogos: [
      '/dc.jpg',
      '/srh.jpg'
    ],
    status: 'upcoming',
  },
  {
    id: 4,
    matchNumber: 4,
    teams: 'Rajasthan Royals vs Punjab Kings',
    date: '2024-07-04 19:30',
    venue: 'Sawai Mansingh Stadium',
    teamLogos: [
      '/rr.jpg',
      '/pbks.jpg'
    ],
    status: 'upcoming',
  },
]; 