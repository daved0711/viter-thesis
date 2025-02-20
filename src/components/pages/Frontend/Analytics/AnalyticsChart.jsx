import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dataArea = [
  { month: "Jan", BukalSur: 200, Lagalag: 150, Taguan: 100, Other: 50 },
  { month: "Feb", BukalSur: 180, Lagalag: 130, Taguan: 110, Other: 40 },
  { month: "Mar", BukalSur: 190, Lagalag: 140, Taguan: 120, Other: 60 },
  { month: "Apr", BukalSur: 170, Lagalag: 160, Taguan: 130, Other: 70 },
  { month: "May", BukalSur: 220, Lagalag: 180, Taguan: 150, Other: 80 },
  { month: "Jun", BukalSur: 210, Lagalag: 170, Taguan: 140, Other: 90 },
];

const dataBar = [
  { category: "Cat", count: 100 },
  { category: "Dog", count: 200 },
  { category: "Other", count: 150 },
];

const AnalyticsChart = () => {
  return (
    <div className="p-6 space-y-8  gap-5 ">
      {/* Area Chart */}
      <h2 className="text-xl font-semibold mb-4">Rabies Cases Over Time</h2>
      <div className="p-4 bg-white rounded shadow">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={dataArea}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="BukalSur"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Lagalag"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Taguan"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            <Area
              type="monotone"
              dataKey="Other"
              stackId="1"
              stroke="#ff7300"
              fill="#ff7300"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <h2 className="text-xl font-semibold mb-4">Animal Categories</h2>
      <div className="p-4 bg-white rounded shadow">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dataBar}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;
