import React from 'react';
import { FaChartLine, FaEye, FaMousePointer, FaUserFriends } from 'react-icons/fa';

const AdminAnalytics = () => {
  const stats = [
    { label: "Vues totales", value: "12,345", increase: "+12%", icon: <FaEye />, color: "blue" },
    { label: "Visiteurs uniques", value: "8,124", increase: "+5%", icon: <FaUserFriends />, color: "green" },
    { label: "Taux de clic", value: "4.3%", increase: "+1.2%", icon: <FaMousePointer />, color: "purple" },
    { label: "Conversion", value: "2.1%", increase: "+0.5%", icon: <FaChartLine />, color: "orange" },
  ];

  const trafficData = [
    { day: "Lun", visits: 65 },
    { day: "Mar", visits: 85 },
    { day: "Mer", visits: 72 },
    { day: "Jeu", visits: 95 },
    { day: "Ven", visits: 110 },
    { day: "Sam", visits: 55 },
    { day: "Dim", visits: 45 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Statistiques</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div className={`text-${stat.color}-500 text-3xl mb-4`}>
              {stat.icon}
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <div className="flex items-end gap-3">
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-green-500 text-sm font-medium mb-1">{stat.increase}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Traffic Chart Simulation */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Trafic Hebdomadaire</h2>
        <div className="flex items-end justify-between h-64 gap-4">
          {trafficData.map((data, index) => (
            <div key={index} className="flex flex-col items-center w-full group cursor-pointer">
              <div className="w-full bg-gray-100 rounded-t-lg h-full flex items-end relative overflow-hidden">
                <div
                  className="w-full bg-blue-500 rounded-t-lg transition-all duration-500 group-hover:bg-blue-600"
                  style={{ height: `${(data.visits / 120) * 100}%` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded transition-opacity">
                    {data.visits} visites
                  </div>
                </div>
              </div>
              <span className="text-gray-500 text-sm mt-2">{data.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
