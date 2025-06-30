import NavBar from './NavBar';
import MatchCard from './MatchCard';
import PointsTable from './PointsTable';
import MatchSchedule from './MatchSchedule';
import HistoricalMatches from './HistoricalMatches';
import PointsBarChart from './PointsBarChart';
import PerformanceTrendChart from './PerformanceTrendChart';
import type { Match } from './matches';

interface DashboardContentProps {
  matches: Match[];
}

export default function DashboardContent({ matches }: DashboardContentProps) {
  const liveMatches = matches.filter(m => m.status === 'live');
  const nextUpcoming = matches.find(m => m.status === 'upcoming');

  return (
    <>
      <NavBar />
      <main className="px-4 sm:px-8 py-6 flex flex-col gap-10 max-w-7xl mx-auto">
        <section id="live" className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white border-b pb-2">Live / Upcoming Matches</h2>
          {liveMatches.length > 0 ? (
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-stretch">
              {liveMatches.map(match => (
                <MatchCard
                  key={match.id}
                  matchNumber={match.matchNumber}
                  teams={match.teams}
                  date={match.date}
                  venue={match.venue}
                  status={match.status}
                  teamLogos={match.teamLogos}
                  firstInningsScore={match.firstInningsScore}
                  team1Score={match.team1Score}
                  team2Score={match.team2Score}
                  matchSituation={match.matchSituation}
                />
              ))}
            </div>
          ) : nextUpcoming ? (
            <div className="flex justify-center">
              <MatchCard
                matchNumber={nextUpcoming.matchNumber}
                teams={nextUpcoming.teams}
                date={nextUpcoming.date}
                venue={nextUpcoming.venue}
                status={nextUpcoming.status}
                teamLogos={nextUpcoming.teamLogos}
                firstInningsScore={nextUpcoming.firstInningsScore}
                team1Score={nextUpcoming.team1Score}
                team2Score={nextUpcoming.team2Score}
                matchSituation={nextUpcoming.matchSituation}
              />
            </div>
          ) : null}
        </section>
        <section id="points" className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white border-b pb-2">Points Table</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto p-4">
            <PointsTable />
          </div>
        </section>
        <section id="schedule" className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-white border-b pb-2">Match Schedule</h2>
          <div className="bg-white rounded-xl shadow-lg p-4">
            <MatchSchedule />
          </div>
        </section>
        <section id="history" className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white border-b pb-2">Historical Matches</h2>
          <div className="bg-white rounded-xl shadow-lg p-4">
            <HistoricalMatches />
          </div>
        </section>
        <section id="points-chart" className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white border-b pb-2">Points Chart</h2>
          <div className="bg-white rounded-xl shadow-lg p-4 flex gap-4 flex-wrap">
            <PointsBarChart />
            <PerformanceTrendChart />
          </div>
        </section>
      </main>
    </>
  );
} 