// App.js
import React from "react";

// Sample data for dashboard cards
const stats = [
  { title: "Users", value: 1200 },
  { title: "Revenue", value: "$34,000" },
  { title: "Orders", value: 450 },
  { title: "Feedbacks", value: 120 },
];

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
      <ul>
        <li className="py-2 hover:bg-gray-700 px-3 rounded cursor-pointer">Home</li>
        <li className="py-2 hover:bg-gray-700 px-3 rounded cursor-pointer">Analytics</li>
        <li className="py-2 hover:bg-gray-700 px-3 rounded cursor-pointer">Reports</li>
        <li className="py-2 hover:bg-gray-700 px-3 rounded cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <h2 className="text-xl font-bold">Dashboard Overview</h2>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Profile</button>
      </div>
    </div>
  );
}

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">{stat.title}</h3>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <DashboardCards />
      </div>
    </div>
  );
}

export default App;
