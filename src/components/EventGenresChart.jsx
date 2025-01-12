import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#3e40d6'];

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  // Effect to update chart data whenever `events` changes
  useEffect(() => {
    if (events && events.length) {
      setData(getData());
    }
  }, [events]);

  // Function to generate chart data based on genres
  const getData = () => {
    return genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary?.toLowerCase().includes(genre.toLowerCase())
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
  };
  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart
        margin={{
          top: 40,
          bottom: 80,
        }}
      >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]} // Loop through colors if genres > colors
            />
          ))}
        </Pie>
        <Legend
          align="center"
          verticalAlign="bottom"
          layout="horizontal"
          wrapperStyle={{ marginTop: '20px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
