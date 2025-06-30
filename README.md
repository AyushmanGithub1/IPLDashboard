🏏 IPL Dashboard (Next.js + TypeScript + Tailwind CSS)
A simple yet visually appealing IPL dashboard showcasing live match details, points table, match schedule, team performance trends, and real-time notifications — built using Next.js, TypeScript, and Tailwind CSS.

<!-- Replace with your actual screenshot path if available -->

🔥 Features
⚡ Live/Upcoming Matches with scores and match situation

📅 Match Schedule section for upcoming fixtures

📊 Points Table with recent form indicators

📈 Team Performance Charts using react-chartjs-2

🔔 Toast Notifications for events like milestones/wickets

🎨 Animated Background Slideshow (bat, ball, and players)

💨 Fully responsive and accessible UI

📦 Tech Stack
Tech	Usage
Next.js	Framework (Static Site Generation)
TypeScript	Type safety across components
Tailwind CSS	Utility-first styling
Chart.js + React ChartJS	Data visualization
React Hooks	State and effect management

🧠 TypeScript Concepts Used
Interfaces (Match, MatchScheduleEntry, TeamStats, etc.)

Props typing

Optional and union types

Functional component typing (React.FC)

Type-safe state with useState

📁 Folder Structure (Simplified)
arduino
Copy
Edit
/app
  ├── components/
  │   ├── NavBar.tsx
  │   ├── MatchCard.tsx
  │   ├── PointsTable.tsx
  │   ├── MatchSchedule.tsx
  │   ├── PerformanceTrendChart.tsx
  │   ├── PointsBarChart.tsx
  │   └── ToastNotification.tsx
  ├── matches.ts
  ├── globals.css
  ├── layout.tsx
  └── page.tsx (entry point)

🖼️ Background Images
The background includes a rotating slideshow of cricket images with a soft overlay to maintain readability. You can replace the images in /public like /hitman3.jpg, /kohli1.jpg, etc.

📈 Sample Charts
Bar Chart for team points

Line Chart for performance trends across matches
(Powered by react-chartjs-2)

✨ Credits
Image assets from Unsplash / [Google Images]

Inspiration from IPL’s official UI

Built with ❤️ using React + Tailwind CSS

🧪 Deployment 
