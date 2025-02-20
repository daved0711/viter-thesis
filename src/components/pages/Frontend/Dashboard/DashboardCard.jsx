import React from 'react'

const DashboardCard = () => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-6 text-black">
              <div className="bg-gray-100 p-4 rounded shadow">
                <h2 className="text-xl font-semibold ">Total Cases</h2>
                <p className="text-4xl font-bold">21,324</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <h2 className="text-xl font-semibold">Vaccinated Pets</h2>
                <p className="text-4xl font-bold">221,324.50</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <h2 className="text-xl font-semibold">Total Sessions</h2>
                <p className="text-4xl font-bold">16,703</p>
              </div>
            </div>
    </div>
  )
}

export default DashboardCard
