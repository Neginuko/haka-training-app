import React from 'react';
import styles from './Calendar.module.css';

interface CommitData {
  date: string;
  count: number;
}

interface CalendarProps {
  commits: CommitData[]; // コミットデータの配列
}

const Calendar: React.FC<CalendarProps> = ({ commits }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // コミット数に応じた色を返す関数
  const getColor = (count: number): string => {
    const intensity = Math.min(Math.floor(count / 5), 4);
    return `rgba(31, 138, 112, ${0.2 + intensity / 10})`;
  };

  // カレンダーを作成する関数
  const renderCalendar = () => {
    const calendar = [];

    for (let month = 0; month < 12; month++) {
      const monthRows = [];

      for (let row = 0; row < 5; row++) {
        const week = [];

        for (let col = 0; col < 7; col++) {
          const dayIndex = row * 7 + col;
          const commitData = commits[dayIndex + month * 35]; // 1ヶ月のコミットデータ
          const commitCount = commitData ? commitData.count : 0;
          const color = getColor(commitCount);

          if (row === 0 && col === 0 && month % 4 === 0) {
            week.push(
              <div key={`${month}-${row}-${col}`} className={styles.month}>
                {months[month]}
              </div>
            );
          } else if (row === 0 && col === 0) {
            week.push(<div key={`${month}-${row}-${col}`} className={styles.month} />);
          } else if (row === 0) {
            week.push(
              <div key={`${month}-${row}-${col}`} className={styles.dayOfWeek}>
                {daysOfWeek[col]}
              </div>
            );
          }

          week.push(
            <div key={`${month}-${row}-${col}`} className={styles.day}>
              <div className={styles.commitCount} style={{ backgroundColor: color }}>
                {commitCount}
              </div>
            </div>
          );
        }

        monthRows.push(
          <div key={`${month}-${row}`} className={styles.week}>
            {week}
          </div>
        );
      }

      calendar.push(
        <div key={month} className={styles.monthContainer}>
          {monthRows}
        </div>
      );
    }

    return calendar;
  };

  return <div className={styles.calendar}>{renderCalendar()}</div>;
};

export default Calendar;
