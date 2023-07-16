import React, { useState } from 'react';
import '../../app/globals.css';

type Training = {
  displayName: string; // for UI
  name: string; // for database
  count: string;
};

const Trainings = () => {
  const [committedTrainings, setCommittedTrainings] = useState<Training[]>([]);
  const [commitMessage, setCommitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const [trainings, setTrainings] = useState<Training[]>([
    { displayName: '腹筋', name: 'abdominal', count: '' },
    { displayName: 'V字腹筋', name: 'vAbdominal', count: '' },
    { displayName: '腕立て', name: 'pushups', count: '' },
    { displayName: '背筋', name: 'back', count: '' },
    { displayName: 'スクワット', name: 'squat', count: '' },
    { displayName: 'ブルガリアンスクワット', name: 'bulgarianSquat', count: '' },
    { displayName: 'フロントランジ', name: 'frontLunge', count: '' },
    { displayName: 'サイドランジ', name: 'sideLunge', count: '' },
    { displayName: 'ヒップリフト', name: 'hiplift', count: '' },
    { displayName: 'カーフレイズ', name: 'callfraise', count: '' },
  ]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTrainings = [...trainings];
    newTrainings[index].count = event.target.value.replace(/[^0-9]+/i, '');
    setTrainings(newTrainings);
    setCommittedTrainings(newTrainings.filter((training) => training.count !== ''));
  };

  const handleCommit = () => {
    if (committedTrainings.length === 0) {
      setCommitMessage('Please enter a number.');
      setIsError(true);
      return;
    }

    // Commit is done. Clear the counts and print the committed trainings to the console.
    const newTrainings = trainings.map((training) => ({ ...training, count: '' }));
    setTrainings(newTrainings);
    setCommitMessage('Commit is done.');
    setIsError(false);
    console.log(
      'Committed Trainings:',
      committedTrainings.map((training) => ({ name: training.name, count: training.count }))
    );
  };

  return (
    <div className="training-container">
      {trainings.map((training, index) => (
        <div key={index} className="training-item">
          <label className="training-label">
            {training.displayName}：
            <input type="text" className="training-input" maxLength={5} value={training.count} onChange={(e) => handleInputChange(e, index)} />回
          </label>
        </div>
      ))}

      <h2 className="training-committed-title">Committed Trainings</h2>
      <ul className="training-committed-list">
        {committedTrainings.map((training, index) => (
          <li key={index} className="training-committed-item">
            {training.displayName}: {training.count}回
          </li>
        ))}
      </ul>
      <button onClick={handleCommit} className="training-commit-button">
        Commit
      </button>
      {commitMessage && <div className={`training-commit-message ${isError ? 'training-commit-error-message' : ''}`}>{commitMessage}</div>}
    </div>
  );
};

export default Trainings;
