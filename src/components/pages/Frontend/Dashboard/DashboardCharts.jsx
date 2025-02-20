import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";


const data = [
    { month: "Jan", 2021: 120, 2022: 200, 2023: 180, 2024: 150 },
    { month: "Feb", 2021: 130, 2022: 210, 2023: 190, 2024: 160 },
    { month: "Mar", 2021: 150, 2022: 230, 2023: 200, 2024: 170 },
    { month: "Apr", 2021: 170, 2022: 250, 2023: 220, 2024: 180 },
    { month: "May", 2021: 160, 2022: 240, 2023: 210, 2024: 175 },
  ];

  const recentCases = [
    { name: "Jerry Mattedi", date: "19 May, 2021 : 10:10 AM", phone: "251-661-5362", location: "QUEZON", animal: "Dog" },
    { name: "Elianora Vasilov", date: "18 May, 2021 : 3:12 PM", phone: "171-534-1262", location: "QUEZON", animal: "Cat" },
    { name: "Alvis Daen", date: "17 May, 2021 : 2:15 PM", phone: "974-661-5110", location: "QUEZON", animal: "Cat" },
    { name: "Lissa Shipsey", date: "23 Apr, 2021 : 1:15 PM", phone: "541-661-3042", location: "QUEZON", animal: "Dog" },
  ];
  
const DashboardCharts = () => {
  return (
    <div>
        <h2 className="text-xl font-semibold mb-4">Rabies Cases</h2>
      <div className="p-4 bg-white rounded shadow">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="2021" stroke="#8884d8" />
            <Line type="monotone" dataKey="2022" stroke="#82ca9d" />
            <Line type="monotone" dataKey="2023" stroke="#ffc658" />
            <Line type="monotone" dataKey="2024" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DashboardCharts
