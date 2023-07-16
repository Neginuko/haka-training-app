import React from 'react';
import '../../app/globals.css';

const Contributions: React.FC = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const commitData: Record<string, number> = {
    '2023-07-05': 3,
    '2023-07-06': 7,
    '2023-07-10': 1,
    '2023-07-12': 8,
    '2023-08-08': 4,
    '2023-08-12': 13,
    '2023-08-14': 10,
    '2023-08-10': 7,
    '2023-08-11': 4,
    '2023-08-20': 3,
    '2023-08-23': 7,
    '2023-09-03': 8,
    '2023-09-04': 5,
    '2023-09-07': 6,
    '2023-09-15': 3,
    '2023-09-19': 2,
    '2023-09-22': 10,
    '2023-09-24': 7,
    '2023-09-25': 3,
    '2023-09-28': 5,
    '2023-09-30': 11,
    '2023-10-02': 3,
    '2023-10-04': 13,
    '2023-10-08': 5,
    '2023-10-09': 8,
    '2023-10-11': 3,
    '2023-10-13': 9,
    '2023-10-16': 14,
    '2023-10-17': 1,
    '2023-10-19': 7,
    '2023-10-20': 2,
    '2023-10-22': 1,
    '2023-10-23': 14,
    '2023-10-26': 5,
    '2023-10-27': 7,
    '2023-10-29': 2,
    '2023-10-31': 3,
    '2023-11-02': 2,
    '2023-11-03': 5,
    '2023-11-04': 2,
    '2023-11-08': 12,
    '2023-11-10': 4,
    '2023-11-15': 10,
    '2023-11-16': 2,
    '2023-11-19': 8,
    '2023-11-22': 4,
    '2023-11-23': 1,
    '2023-11-26': 7,

    // 他の日付のデータも追加することができます
  };

  const getCommitColor = (commitCount: number): string => {
    if (commitCount >= 10) return '#216E39';
    if (commitCount >= 7) return '#30A14E';
    if (commitCount >= 4) return '#40C463';
    if (commitCount >= 1) return '#9BE9A8';
    return '#EBEDF0';
  };

  const renderGrid = () => {
    const yearStart = new Date();
    yearStart.setFullYear(yearStart.getFullYear(), 0, 1); // This year's January 1st
    const rows = [];
    let monthLabels = Array(53).fill(''); // Initialize array for month labels

    for (let i = 0; i < 7; i++) {
      // 7 days a week
      const weeks = [];
      for (let j = 0; j < 53; j++) {
        // 53 weeks in a year
        const date = new Date(yearStart.getTime());
        date.setDate(date.getDate() + j * 7 + i); // Move to the target date
        const dateString = date.toISOString().substring(0, 10);
        const commitCount = commitData[dateString] || 0;
        const color = getCommitColor(commitCount);
        const tooltipText = `${commitCount} Contributions on ${days[i]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

        const isMonthStart = date.getDate() === 1;
        if (isMonthStart && monthLabels[j] === '') {
          // If it is the first day of the month and label not yet set
          monthLabels[j] = months[date.getMonth()];
        }
        weeks.push(<div key={j} className="day" style={{ backgroundColor: color }} data-tooltip={tooltipText}></div>);
      }
      rows.push(
        <div className="week" key={i}>
          {weeks}
        </div>
      );
    }

    // Render Month labels
    const monthLabelRow = (
      <div className="week month-label-row">
        {monthLabels.map((label, i) => (
          <div key={i} className="month-label-container">
            <span className="month-label">{label}</span>
          </div>
        ))}
      </div>
    );
    rows.unshift(monthLabelRow); // Add month label row at the start

    return rows;
  };

  return (
    <div className="contributions">
      <div className="contributions-wrapper">
        <div className="labels">
          {days.map((day, i) => (
            <div key={day} className="day-label">
              {day}
            </div>
          ))}
        </div>
        <div className="grid-container">
          <div className="row">
            <div className="weeks-container">{renderGrid()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
