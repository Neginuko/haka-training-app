'use client';
import React, { useState } from 'react';
import '../../app/globals.css';
import axios from 'axios';

type Training = {
  displayName: string; // for UI
  name: string; // for database
  count: string;
};

type TrainingIdMap = {
  [key: string]: string;
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

  const trainingIdByName: TrainingIdMap = {
    abdominal: 'id1',
    vAbdominal: 'id2',
    pushups: 'id3',
    back: 'id4',
    squat: 'id5',
    bulgarianSquat: 'id6',
    frontLunge: 'id7',
    sideLunge: 'id8',
    hiplist: 'id9',
    callfraise: 'id10',
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTrainings = [...trainings];
    newTrainings[index].count = event.target.value.replace(/[^0-9]+/i, '');
    setTrainings(newTrainings);
    setCommittedTrainings(newTrainings.filter((training) => training.count !== ''));
  };

  const handleCommit = async () => {
    if (committedTrainings.length === 0) {
      setCommitMessage('Please enter a number.');
      setIsError(true);
      return;
    }

    for (const training of committedTrainings) {
      try {
        const response = await axios.post('/api/path-to-your-api', {
          userId: 'your-user-id',
          trainingId: trainingIdByName[training.name],
          doneTimes: parseInt(training.count),
        });

        if (response.status === 200) {
          console.log('Commit successful for training:', training.name);
        } else {
          console.error('Failed to commit for training:', training.name);
        }
      } catch (error) {
        console.error('An error occurred while committing for training:', training.name);
      }
    }

    const newTrainings = trainings.map((training) => ({ ...training, count: '' }));
    setTrainings(newTrainings);
    setCommittedTrainings([]);
    setCommitMessage('Commit is done.');
    setIsError(false);
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
