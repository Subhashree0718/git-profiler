import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
const LanguageChart = ({ repos }) => {  
  const chartData = useMemo(() => {
    const langStats = repos.reduce((stats, repo) => {
      if (repo.language) {
        stats[repo.language] = (stats[repo.language] || 0) + 1;
      }
      return stats;
    }, {});
    const labels = Object.keys(langStats);
    const data = Object.values(langStats);
    return {
      labels,
      datasets: [
        {
          label: '# of Repos',
          data,
          backgroundColor: [
            '#3498db', '#f1c40f', '#e74c3c', '#9b59b6',
            '#2ecc71', '#1abc9c', '#e67e22', '#34495e'
          ],
          borderColor: '#ffffff',
          borderWidth: 1,
        },
      ],
    };
  }, [repos]);
  if (chartData.labels.length === 0) {
    return null;
  }
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
      <h2>Language Distribution</h2>
      <Doughnut data={chartData} />
    </div>
  );
};

export default LanguageChart;