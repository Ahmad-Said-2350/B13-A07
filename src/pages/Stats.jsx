import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip, Cell } from 'recharts';
import TimelineContext from '../context/TimelineContext ';

const COLORS = {
  Text: "#7E35E1",
  Call: "#244D3F",
  Video: "#37A163",
};

const Stats = () => {
  const { timeline } = useContext(TimelineContext);

  const counts = timeline.reduce(
    (acc, item) => {
      if (acc[item.interactionType] !== undefined) {
        acc[item.interactionType]++;
      }
      return acc;
    },
    { Text: 0, Call: 0, Video: 0 }
  );

  const data = [
    { name: 'Text', value: counts.Text, fill: '#7E35E1' },
    { name: 'Call', value: counts.Call, fill: '#244D3F' },
    { name: 'Video', value: counts.Video, fill: '#37A163' },
  ].filter(d => d.value > 0); // hide zero slices

  const hasData = data.length > 0;

  const displayData = hasData
    ? data
    : [
        { name: 'Text', value: 1, fill: '#E5E7EB' },
        { name: 'Call', value: 1, fill: '#D1D5DB' },
        { name: 'Video', value: 1, fill: '#F3F4F6' },
      ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-[#1F2937] mb-8">
          Friendship Analytics
        </h1>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <p className="text-base font-semibold text-[#6B7280] uppercase tracking-wide mb-6">
           By Interaction Type
          </p>

          {!hasData && (
            <p className="text-center text-sm text-gray-400 mb-4">
              No interactions yet — log a call, text, or video to see your chart.
            </p>
          )}

          <div className="flex justify-center items-center">
            <PieChart width={380} height={280}>
              <Pie
                data={displayData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                cornerRadius={6}
                paddingAngle={4}
                dataKey="value"
                isAnimationActive={true}
              >
                {displayData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>

              {hasData && <Tooltip formatter={(value, name) => [value, name]} />}

              <Legend
                iconType="circle"
                iconSize={10}
                formatter={(value) => (
                  <span style={{ color: '#374151', fontSize: '13px' }}>{value}</span>
                )}
              />
            </PieChart>
          </div>

          {hasData && (
            <div className="flex justify-center gap-8 mt-6 pt-6 border-t border-gray-100">
              {data.map((item) => (
                <div key={item.name} className="text-center">
                  <p className="text-2xl font-bold" style={{ color: item.fill }}>
                    {item.value}
                  </p>
                  <p className="text-[12px] text-gray-500 mt-1 uppercase tracking-wide">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};







export default Stats;